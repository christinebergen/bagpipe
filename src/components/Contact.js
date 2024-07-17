import React from 'react';

const Contact = () => {
  return (
    <div className="bg-medBackground dark:bg-medDarkBackground min-h-screen">
      <h1 className="text-4xl text-center mt-8 mb-8 text-gray-800 dark:text-primaryText">Contact Us</h1>
      <div className="flex justify-center items-center">
        <div className="w-3/4 md:w-2/3 lg:w-1/2 text-gray-800 dark:text-secondaryText text-center">
          <p className="text-xl mb-8">
            We're here to help! Whether you have questions about our lessons, services, or availability, feel free to reach out. You can contact us via the methods below, and we'll get back to you as soon as possible.
          </p>
          <div className="bg-white dark:bg-darkBackground shadow-md rounded-lg px-8 pt-6 pb-8 mb-4">
            <h2 className="text-2xl mb-4 text-gray-800 dark:text-primaryText">Contact Information</h2>
            <p className="mb-4">
              <strong>Email:</strong> <a href="mailto:aaron.bergen@telus.net" className="text-blue-700 dark:text-accentColor underline hover:font-bold">info@example.com</a>
            </p>
            <p className="mb-4">
              <strong>Phone:</strong> <a href="tel:+12506678983" className="text-blue-700 dark:text-accentColor underline hover:font-bold">+1 (250) 667-8983</a>
            </p>
            
            <p className="mb-4">
              <strong>Social Media:</strong>
            </p>
            <p>
              <a href="https://facebook.com" className="text-blue-700 dark:text-accentColor underline hover:font-bold mr-4">Facebook</a>
              <a href="https://twitter.com" className="text-blue-700 dark:text-accentColor underline hover:font-bold mr-4">Twitter</a>
              <a href="https://instagram.com" className="text-blue-700 dark:text-accentColor underline hover:font-bold">Instagram</a>
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Contact;

