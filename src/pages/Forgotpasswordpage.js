import React, { Component } from 'react'
import Footer from '../components/Footer'
import { FaChevronLeft } from 'react-icons/fa'

export default class Forgotpasswordpage extends Component {
  render() {
    return (
      <>
        <body>
          <header className="header-forgot">
            <div className="header-content">
              <div className="header-nav">
                <div>
                  <a href="#">
                    <FaChevronLeft fa-xl />
                  </a>
                  <span>Back</span>
                </div>
              </div>
              <h1 className="heading">Don’t worry, we got your back!</h1>
              <form>
                <div>
                  <input placeholder="Enter your email address" type="email" className="email" />
                </div>
                <div>
                  <button className="button-send">Send Link</button>
                </div>
              </form>
              <p className="text">
                You will receive a link to reset your password.<br />
                If you haven’t received any link, click <span>Resend Link</span>
              </p>
            </div>
          </header>
          <Footer />
        </body>
      </>
    )
  }
}