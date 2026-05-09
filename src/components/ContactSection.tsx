import { useState } from "react";
import type { FormEvent } from "react";
import emailjs from "@emailjs/browser";

import {
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaPhone,
  FaLocationDot,
} from "react-icons/fa6";

import SectionHeading from "./SectionHeading";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (
    event: FormEvent<HTMLFormElement>
  ) => {
    event.preventDefault();
  
    const form = event.currentTarget;
  
    try {
      await emailjs.sendForm(
        "service_797b2g3",
        "template_v3ffnap",
        form,
        "cTwDrMflAHk5gwCbO"
      );
  
      setSubmitted(true);
  
      form.reset();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section
      id="contact"
      className="section-padding border-t border-slate-200 dark:border-slate-800"
    >
      <div className="mx-auto max-w-6xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let’s Connect"
          description="I am open to software developer, full-stack, and mobile application opportunities. Feel free to reach out for collaboration, interviews, or technical discussions."
        />

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          {/* Contact Information */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Contact Information
            </h3>

            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500" />

            <p className="mt-8 max-w-lg text-base leading-8 text-slate-600 dark:text-slate-300">
              Feel free to reach out to me through any of these channels. I'm
              always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>

            <div className="mt-10 space-y-8">
              {/* Email */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                  <FaEnvelope size={22} />
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Email
                  </p>

                  <a
                    href="mailto:mrtanish14@gmail.com"
                    className="mt-1 block text-base text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
                  >
                    mrtanish14@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                  <FaPhone size={20} />
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Phone
                  </p>

                  <a
                    href="tel:+917204336956"
                    className="mt-1 block text-base text-slate-600 transition hover:text-cyan-600 dark:text-slate-300 dark:hover:text-cyan-300"
                  >
                    +91 7204336956
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-5">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-cyan-100 text-cyan-600 dark:bg-cyan-900/30 dark:text-cyan-300">
                  <FaLocationDot size={22} />
                </div>

                <div>
                  <p className="text-lg font-semibold text-slate-900 dark:text-slate-100">
                    Location
                  </p>

                  <p className="mt-1 text-base text-slate-600 dark:text-slate-300">
                    Sakleshpur, Karnataka, India
                  </p>
                </div>
              </div>
            </div>

            {/* Social Icons */}
            <div className="mt-12 flex items-center gap-4">
              <a
                href="https://linkedin.com/in/tanish-s"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:-translate-y-1 hover:bg-cyan-500 hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-cyan-500"
              >
                <FaLinkedin size={20} />
              </a>

              <a
                href="https://github.com/Tanish141"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:-translate-y-1 hover:bg-cyan-500 hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-cyan-500"
              >
                <FaGithub size={20} />
              </a>

              {/* <a
                href="https://x.com/"
                target="_blank"
                rel="noreferrer"
                className="flex h-14 w-14 items-center justify-center rounded-full bg-slate-100 text-slate-700 transition hover:-translate-y-1 hover:bg-cyan-500 hover:text-white dark:bg-slate-800 dark:text-slate-300 dark:hover:bg-cyan-500"
              >
                <FaXTwitter size={18} />
              </a> */}
            </div>
          </article>

          {/* Contact Form */}
          <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-slate-900/60">
            <h3 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              Send a Message
            </h3>

            <div className="mt-2 h-1 w-16 rounded-full bg-gradient-to-r from-cyan-500 to-pink-500" />

            <form onSubmit={handleSubmit} className="mt-10 space-y-5">
              <input
                type="text"
                name="from_name"
                required
                placeholder="Your Name"
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />

              <input
                type="email"
                name="from_email"
                required
                placeholder="Your Email"
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />

              <textarea
              name="message"
                required
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-2xl border border-slate-300 bg-slate-50 px-5 py-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-500 focus:border-cyan-400 dark:border-slate-700 dark:bg-slate-950 dark:text-slate-100"
              />

              <button
                type="submit"
                className="rounded-full bg-cyan-500 px-8 py-3 text-sm font-semibold text-white transition hover:bg-cyan-600"
              >
                Send Message
              </button>

              {submitted && (
                <p className="text-sm text-emerald-500">
                  Thanks for reaching out! I will get back to you soon.
                </p>
              )}
            </form>
          </article>
        </div>
      </div>
    </section>
  );
}