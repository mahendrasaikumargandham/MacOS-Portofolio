import React from 'react'
import WindowWrapper from '../hoc/WindowWrapper'
import { socials } from '../constants';
import { WindowControls } from '../components';

const Contact = () => {
  return (
    <>
        <div id = "window-header">
            <WindowControls target = "contact" />
            <h2>Contact me</h2>
        </div>

        <div className='contact-card p-5 space-y-5'>
            <img src = "/images/mahendragandham.png" alt = "Mahendra" className='w-20 rounded-full' />
            <h3>Let's connect</h3>
            <p>Software Analyst at Accenture, developer, and content creator based in Hyderabad. Let's connect about software, games, or content collaborations.</p>
            <a className="contact-email" href="mailto:mahendragandham730@gmail.com">mahendragandham730@gmail.com</a>
            <ul>
                {socials.map(({ id, bg, link, icon, text }) => (
                    <li key = {id} style = {{ backgroundColor : bg }}>
                        <a
                            href = {link}
                            target = "_blank"
                            rel = "noopener noreferrer"
                            title = {text}
                        >
                            <img src = {icon} alt = {text} className='size-5' />
                            <p>{text}</p>
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    </>
  )
}

const ContactWindow = WindowWrapper(Contact, "contact");
export default ContactWindow;
