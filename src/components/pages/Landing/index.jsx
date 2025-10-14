import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';

import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import { decodeBase64 } from '../../../utils/decodeBase64.js';

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
    window.open('https://www.humanrightsfirst.org', '_blank');
  };

  return (
    <div className="font-sans text-gray-800">
      {/* Hero Section (Main title and subtitle) */}
      <section className="text-center py-12 bg-gray-50 border-b border-gray-200">
        <h1 className="text-4xl font-bold mb-3">Asylum Office Grant Rate Tracker</h1>
        <p className="text-gray-600 max-w-3xl mx-auto leading-relaxed">
          The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers,
          and the public an interactive tool to explore USCIS data on Asylum Office decisions.
        </p>
      </section>

      {/* Charts Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 p-10 max-w-6xl mx-auto text-center">
        <div>
          <img src={barGraph} alt="Bar Graph" className="mx-auto mb-4 rounded-md shadow" />
          <p className="font-semibold mb-4">Search Grant Rates By Office</p>
          <div className="flex justify-center gap-3">
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              View the Data
            </button>
            <button
              onClick={downloadCSV}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
            >
              Download the Data
            </button>
          </div>
        </div>

        <div>
          <img src={pieChart} alt="Pie Chart" className="mx-auto mb-4 rounded-md shadow" />
          <p className="font-semibold mb-4">Search Grant Rates By Nationality</p>
          <div className="flex justify-center gap-3">
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              View the Data
            </button>
            <button
              onClick={downloadCSV}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
            >
              Download the Data
            </button>
          </div>
        </div>

        <div>
          <img src={lineGraph} alt="Line Graph" className="mx-auto mb-4 rounded-md shadow" />
          <p className="font-semibold mb-4">Search Grant Rates Over Time</p>
          <div className="flex justify-center gap-3">
            <button className="bg-gray-700 text-white px-4 py-2 rounded hover:bg-gray-800 transition">
              View the Data
            </button>
            <button
              onClick={downloadCSV}
              className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500 transition"
            >
              Download the Data
            </button>
          </div>
        </div>
      </section>

      {/*  Info Section */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto py-16 px-6 items-center">
        <img src={paperStack} alt="Paper Stack" className="rounded-lg shadow-lg" />
        <p className="text-gray-700 leading-relaxed text-lg">
          Human Rights First has created a search tool to give you a user-friendly way to explore a
          data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office,
          which we received through a Freedom of Information Act request. You can search for
          information on asylum grant rates by year, nationality, and asylum office, visualize the
          data with charts and heat maps, and download the data set.
        </p>
      </section>

      {/*  Stats Section */}
      <section className="text-center py-16 bg-gray-50">
        <h2 className="text-2xl font-semibold mb-10">Systemic Disparity Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-5xl mx-auto text-gray-700">
          <div>
            <p className="text-3xl font-bold mb-2">36%</p>
            <p>
              By the end of the Trump administration, the average asylum office grant rate had
              fallen 36% from FY 2016 to 28% in FY 2020.
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-2">5%</p>
            <p>The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</p>
          </div>
          <div>
            <p className="text-3xl font-bold mb-2">6x Lower</p>
            <p>
              Between FY 2017 and 2020, the New York asylum office’s average grant rate was six
              times lower than San Francisco’s.
            </p>
          </div>
        </div>
        <button
          onClick={handleReadMore}
          className="mt-10 px-6 py-3 bg-gray-700 text-white rounded hover:bg-gray-800 transition"
        >
          Read More
        </button>

        <button
          onClick={scrollToTop}
          className="block mt-6 mx-auto text-blue-600 hover:text-blue-800 underline"
        >
          Back To Top ↑
        </button>
      </section>
      <div className="mt-4 text-xs opacity-75 font-mono">
        {'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}
      </div>
    </div>
  );
};
