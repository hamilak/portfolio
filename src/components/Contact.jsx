import React, { useRef } from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaSquareXTwitter, FaUpwork } from "react-icons/fa6";
import emailjs from 'emailjs-com';
import { Divider, Tooltip, Whisper } from 'rsuite';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_USER_ID)
      .then((result) => {
        console.log(result.text);
        alert("Email sent successfully!");
      }, (error) => {
        console.log(error.text);
        alert("Failed to send email. Please try again.");
      });

    e.target.reset();
  };

  return (
    <div>
      <div className='min-h-screen text-white leading-10'>
        <div className='lg:flex items-center justify-start min-h-screen'>
        <div className="text-center w-2/5 hidden lg:block">
            <div className='flex justify-center'>
              <img src='/telephone.png' alt='Contact' width={100} />
            </div>
            <h6 className='lg:hidden block text-6xl'>Contact</h6>
          </div>
          <div className='flex-1 flex justify-center lg:block w-full max-h-screen p-16 lg:m-10 rounded-md '>
            <div>
              <div>
              <h6 className='md:text-3xl text-xl text-center'>Reach out <span className='underlined underline-clip text-4xl'> TODAY!</span></h6>
                <form ref={form} onSubmit={sendEmail}>
                  <div className='mb-4'>
                    <label htmlFor="name" className='block mb-1 font-bold'>Name</label>
                    <input className='border text-black border-gray-500 w-full p-1 rounded-md' type="text" name="name" required />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor="email" className='block mb-1 font-bold'>Email</label>
                    <input className='border text-black border-gray-500 w-full p-1 rounded-md' type="email" name="email" required />
                  </div>
                  <div className='mb-4'>
                    <label htmlFor="message" className='block mb-1 font-bold'>Message</label>
                    <textarea className='border text-black border-gray-500 w-full p-1 rounded-md' name="message" rows="5" required></textarea>
                  </div>
                  <div className='flex justify-center'>
                    <button type="submit" className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded-md'>
                    Send Message
                  </button>
                  </div>
                </form>
                <Divider>or</Divider>
                <ul className='flex justify-center gap-6'>
                  <Whisper followCursor speaker={<Tooltip>LinkedIn</Tooltip>}>
                    <li className="cursor-pointer">
                    <a target='_blank' href="https://www.linkedin.com/in/kalimah-arigbabu-profile" className='hover:no-underline'>
                    <img width="50" height="50" src="https://img.icons8.com/fluency/50/linkedin.png" alt="linkedin"/>
                    </a>
                      </li>
                  </Whisper>
                  <Whisper followCursor speaker={<Tooltip>Github</Tooltip>}>
                    <li className="cursor-pointer">
                    <a target='_blank' href="https://github.com/hamilak" className='hover:no-underline'>
                    <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/github.png" alt="github"/>
                    </a>
                      </li>
                  </Whisper>
                  <Whisper followCursor speaker={<Tooltip>Gmail</Tooltip>}>
                    <li className="cursor-pointer">
                    <a target='_blank' href="mailto:your-email@gmail.com" className='hover:no-underline'>
                    <img width="48" height="48" src="https://img.icons8.com/color/48/gmail-new.png" alt="gmail-new" />
                    </a>
                      </li>
                  </Whisper>
                  {/* <Whisper followCursor speaker={<Tooltip>Twitter</Tooltip>}>
                    <li className="cursor-pointer">
                    <a target='_blank' href="" className='hover:no-underline'>
                      <img width="48" height="48" src="https://img.icons8.com/pulsar-color/48/twitterx.png" alt="twitterx" />
                    </a>
                      </li>
                  </Whisper> */}
                  <Whisper followCursor speaker={<Tooltip>Upwork</Tooltip>}>
                    <li className="cursor-pointer">
                    <a target='_blank' href="https://www.upwork.com/freelancers/~01139649d1919d1b53?mp_source=share" className='hover:no-underline'><img width="50" height="50" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/50/external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo.png" alt="external-upwork-a-global-freelancing-platform-where-professionals-connect-and-collaborate-remotely-logo-shadow-tal-revivo"/></a>
                      </li>
                  </Whisper>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact