import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

function index() {
  useEffect(() => {
    AOS.init({
      duration: 800, // مدة الأنيميشن بالمللي ثانية
      once: true, // يتكرر ولا لأ
    });
  }, []);

  return (
    <ol className="mt-20 relative space-y-8 max-w-3xl mx-auto before:absolute before:top-0 before:left-1/2 before:h-full before:w-0.5 before:-translate-x-1/2 before:rounded-full before:bg-blue-200">
      {/* Kickoff */}
      <li
        className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
        data-aos="fade-up"
      >
        <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
          <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div className="-mt-2">
            <time className="text-xs font-medium text-gray-600">
              12/02/2025
            </time>
            <h3 className="text-lg font-bold text-blue-800">Project Kickoff</h3>
            <p className="mt-0.5 text-sm text-gray-700">
              We kicked off Lunchify with the vision of building a smart,
              scalable eCommerce platform that connects sellers and buyers
              seamlessly. Initial planning and tech stack decisions were made
              during this phase.
            </p>
          </div>
        </div>
        <div aria-hidden="true"></div>
      </li>

      {/* First Milestone */}
      <li
        className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
        data-aos="fade-up"
      >
        <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
          <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div className="-mt-2">
            <time className="text-xs font-medium text-gray-600">
              05/03/2025
            </time>
            <h3 className="text-lg font-bold text-blue-800">First Milestone</h3>
            <p className="mt-0.5 text-sm text-gray-700">
              Completed the UI design and built the core backend architecture.
              Product management, user accounts, and admin dashboards were all
              connected and functional by this point.
            </p>
          </div>
        </div>
        <div aria-hidden="true"></div>
      </li>

      {/* Launch */}
      <li
        className="group relative grid grid-cols-2 odd:-me-3 even:-ms-3"
        data-aos="fade-up"
      >
        <div className="relative flex items-start gap-4 group-odd:flex-row-reverse group-odd:text-right group-even:order-last">
          <span className="size-3 shrink-0 rounded-full bg-blue-600"></span>

          <div className="-mt-2">
            <time className="text-xs font-medium text-gray-600">
              24/04/2025
            </time>
            <h3 className="text-lg font-bold text-blue-800">Official Launch</h3>
            <p className="mt-0.5 text-sm text-gray-700">
              Lunchify officially launched with a clean UI, smooth product
              browsing, secure checkout system, and features tailored for both
              vendors and customers to manage orders, payments, and inventory
              with ease.
            </p>
          </div>
        </div>
        <div aria-hidden="true"></div>
      </li>
    </ol>
  );
}

export default index;
