import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="containerCon mt-20 formBackground rounded-3xl ">
      <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-100 dark:text-white pt-5">
        Contact Me
      </h2>
      <p class="font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl px-10">
        Need a Website, Freelance work or have a Job offer? Send me an email and
        I will get back soon to you!
      </p>
      <form action="#" class="space-y-8 formPadding pb-10">
        <div className="grid grid-cols-2 text-left">
          <div className>
            <label
              for="email"
              class="block mb-2 text-sm font-medium  text-gray-200 dark:text-gray-300"
            >
              Name
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border w-3/4 placeholder-gray-600 focus:ring-blue-500 focus:border-blue-500 focus:outline-8 border-teal-600 text-black text-sm rounded-lg  block  p-2.5 "
              placeholder="Name"
              required
            />
          </div>
          <div className="">
            <label
              for="email"
              class="block mb-2 text-sm font-medium  text-gray-200 dark:text-gray-300"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              class="shadow-sm bg-gray-50 border w-full placeholder-gray-600 border-gray-300 text-black text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
              placeholder="Name@gmail.com"
              required
            />
          </div>
        </div>
        <div>
          <label
            for="subject"
            class="block mb-2 text-left text-sm font-medium text-gray-200 dark:text-gray-300"
          >
            Subject
          </label>
          <input
            type="text"
            id="subject"
            class="block p-3 w-full text-sm text-gray-200 placeholder-gray-600 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
            placeholder="Let us know how we can help you"
            required
          />
        </div>
        <div class="sm:col-span-2">
          <label
            for="message"
            class="block text-left mb-2 text-sm font-medium text-gray-200 dark:text-gray-400"
          >
            Your message
          </label>
          <textarea
            id="message"
            rows="6"
            class="block p-2.5 w-full text-sm text-gray-900 placeholder-gray-600 bg-blue-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-00 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
            placeholder="Leave a message..."
          ></textarea>
        </div>
        <button class="animated-button  mt-5">
          <svg
            viewBox="0 0 24 24"
            class="arr-2"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
          <span class="text">SEND MESSAGE</span>
          <span class="circle"></span>
          <svg
            viewBox="0 0 24 24"
            class="arr-1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z"></path>
          </svg>
        </button>
      </form>
    </div>
  );
};

export default Contact;
