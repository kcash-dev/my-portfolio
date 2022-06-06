import React from 'react'

export default function Contact() {
  return (
    <section id="contact">
      <div className="mt-10 px-10 pt-5 bg-black w-full">
        <div className="px-5">
          <h3 className="text-2xl font-bold text-white">
            Let's work together
          </h3>
        </div>
        <div className="px-5 py-5">
          <text className="text-white">
            I'm always willing to learn and collaborate with anyone interested. So, if you're looking for a developer,
            want to ask me a question, or just want to say hi; reach out to me.
          </text>
          <br />
          <br />
          <a href="mailto:kcashdev@gmail.com" className="text-white text-lg underline font-bold">kcashdev@gmail.com</a>
        </div>
      </div>
    </section>
  )
}
