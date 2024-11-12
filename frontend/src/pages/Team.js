import React from 'react'
import Navbar from '../components/Navbar'

import TeamLoop from '../images/AboutUs-lp.png'
import Profile from '../images/project-1.jpeg'

import { SDFive } from '../data/SDFive'
import { SDFour } from '../data/SDFour'
import { DHFour } from '../data/DHFour'
import { DRThree } from '../data/DRThree'

import Footer from '../components/Footer'
import ContactSection from '../components/ContactSection'

import '../css/Team.css'

// <span className="upcoming">UPCOMING</span> <span className="events">EVENTS</span>

const Team = () => {
  return (
    <>
      <div>
        {/* Navbar */}
        <Navbar />

        {/* SD-5 */}

        <section className='team' id='team'>
          <div className='team_images'>
            <img src={TeamLoop} alt='Loop' className='team_loop' />
          </div>
          <div className='team_content'>
            <h2 className='team_title_header'>
              <span className='ourmcs'>Our MCS</span>{' '}
              <span className='teamtitle'>Team</span>
            </h2>
          </div>

          <section className='team_container'>
            <header className='team_header'>
              <h1 className='team_title'>
                Student Director - 5 <sup>th</sup> Year
              </h1>
            </header>
          </section>

          <section className='team_card_container'>
            {SDFive.map((team) => (
              <div className='card' key={team.id}>
                <span className='mail'>
                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                    <path d='M528 160l0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16l0-256 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z' />
                  </svg> */}
                </span>
                <div className='profile-pic'>
                  <img src={team.image || Profile} alt='Profile' />
                </div>
                <div className='bottom'>
                  <div className='content'>
                    <span className='name'>{team.name}</span>
                    <span className='about-me'>{team.aboutMe}</span>
                  </div>
                  <div className='bottom-bottom'>
                    <div className='social-links-container'>
                      <a href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                        </svg>
                      </a>

                      <a href='#'>
                        {/* <i class='fa-brands fa-instagram'></i> */}

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                        </svg>
                      </a>
                    </div>
                    {/* <button className='exp'>Explore</button> */}

                    <button className='button'>Explore Me</button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* SD-4 */}

          <section className='team_container1'>
            <header className='team_header1'>
              <h1 className='team_title1'>
                Student coordinator - 4 <sup>th</sup> Year
              </h1>
            </header>
          </section>

          {/* card container */}
          <section className='team_card_container4'>
            {SDFour.map((team) => (
              <div className='card' key={team.id}>
                <span className='mail'>
                  {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-mail'
                  >
                    <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                    <path d='M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                  </svg> */}
                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                    <path d='M528 160l0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16l0-256 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z' />
                  </svg> */}
                </span>
                <div className='profile-pic'>
                  <img src={team.image || Profile} alt='Profile' />
                </div>
                <div className='bottom'>
                  <div className='content'>
                    <span className='name'>{team.name}</span>
                    <span className='about-me'>{team.aboutMe}</span>
                  </div>
                  <div className='bottom-bottom'>
                    <div className='social-links-container'>
                      <a href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                        </svg>
                      </a>

                      <a href='#'>
                        {/* <i class='fa-brands fa-instagram'></i> */}

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                        </svg>
                      </a>
                    </div>
                    {/* <button className='exp'>Explore</button> */}

                    <button className='button'>Explore Me</button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* DH-4 */}

          <section className='team_container1'>
            <header className='team_header1'>
              <h1 className='team_title1'>
                Domain Head - 4 <sup>th</sup> Year
              </h1>
            </header>
          </section>

          {/* card container */}
          <section className='team_card_container5'>
            {DHFour.map((team) => (
              <div className='card' key={team.id}>
                <span className='mail'>
                  {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-mail'
                  >
                    <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                    <path d='M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                  </svg> */}
                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                    <path d='M528 160l0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16l0-256 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z' />
                  </svg> */}
                </span>
                <div className='profile-pic'>
                  <img src={team.image || Profile} alt='Profile' />
                </div>
                <div className='bottom'>
                  <div className='content'>
                    <span className='name'>{team.name}</span>
                    <span className='about-me'>{team.aboutMe}</span>
                  </div>
                  <div className='bottom-bottom'>
                    <div className='social-links-container'>
                      <a href='#'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                        </svg>
                      </a>

                      <a href='#'>
                        {/* <i class='fa-brands fa-instagram'></i> */}

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                        </svg>
                      </a>
                    </div>
                    {/* <button className='exp'>Explore</button> */}

                    <button className='button'>Explore Me</button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          {/* domain representative */}

          <section className='team_container1'>
            <header className='team_header1'>
              <h1 className='team_title1'>
                Domain Representative - 3 <sup>rd</sup> Year
              </h1>
            </header>
          </section>

          <section className='team_card_container5'>
            {DRThree.map((team) => (
              <div className='card' key={team.id}>
                <span className='mail'>
                  {/* <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='lucide lucide-mail'
                  >
                    <rect width='20' height='16' x='2' y='4' rx='2'></rect>
                    <path d='M22 7L13.03 12.7a1.94 1.94 0 0 1-2.06 0L2 7'></path>
                  </svg> */}
                  {/* <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 576 512'>
                    <path d='M528 160l0 256c0 8.8-7.2 16-16 16l-192 0c0-44.2-35.8-80-80-80l-64 0c-44.2 0-80 35.8-80 80l-32 0c-8.8 0-16-7.2-16-16l0-256 480 0zM64 32C28.7 32 0 60.7 0 96L0 416c0 35.3 28.7 64 64 64l448 0c35.3 0 64-28.7 64-64l0-320c0-35.3-28.7-64-64-64L64 32zM272 256a64 64 0 1 0 -128 0 64 64 0 1 0 128 0zm104-48c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0zm0 96c-13.3 0-24 10.7-24 24s10.7 24 24 24l80 0c13.3 0 24-10.7 24-24s-10.7-24-24-24l-80 0z' />
                  </svg> */}
                </span>
                <div className='profile-pic'>
                  <img src={team.image || Profile} alt='Profile' />
                </div>
                <div className='bottom'>
                  <div className='content'>
                    <span className='name'>{team.name}</span>
                    <span className='about-me'>{team.aboutMe}</span>
                  </div>
                  <div className='bottom-bottom'>
                    <div className='social-links-container'>
                      <a href={team.liked}>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path d='M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z' />
                        </svg>
                      </a>

                      <a href='#'>
                        {/* <i class='fa-brands fa-instagram'></i> */}

                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 448 512'
                        >
                          <path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
                        </svg>
                      </a>
                    </div>

                    {/* <button className='exp'>Explore</button> */}

                    <button className='button'>Explore Me</button>
                  </div>
                </div>
              </div>
            ))}
          </section>

          <div className='team_bg_container'>
            <h1 className='team_bg_text'>Team</h1>
          </div>
        </section>
      </div>

      <ContactSection />
      <Footer />
    </>
  )
}

export default Team
