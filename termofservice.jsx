import React,{useState  } from 'react'
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import image from '../../../assets/Frame 2121454161.svg';

const terms = [
  {
    title: 'Eligibility',
    content: [
      'Must be over 18 to use Aryventory.'
    ]
  },
  {
    title: 'Acceptable Use',
    content: [
      'You agree not to misuse Aryventory in any way.',
      'Illegal use, unauthorized access, data scraping, or attempts to interfere with our services are strictly prohibited.'
    ]
  },
  {
    title: 'Functionality Disclaimer',
    content: [
      'We strive to maintain a seamless experience, but we are not liable for service interruptions.',
      'This includes disruptions caused by third-party providers like cloud storage or SMS gateways.'
    ]
  },
  {
    title: 'Payments & Delivery',
    content: [
      'Aryventory does not handle or offer cash payments or delivery services.',
      'We do not integrate with third-party payment platforms.',
      'Refunds are processed within 7 working days if any payment fails, subject to transaction review.'
    ]
  },
  {
    title: 'Policy Updates',
    content: [
      "Terms and policies may be updated at Aryventory's sole discretion.",
      "Continued use of the app signifies agreement with the updated terms."
    ]
  }
];

function Termsofservice() {

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };


  return (
    <div className="w-full flex-1 h-auto overflow-y-auto p-6 bg-[#F6F6F6] rounded-xl shadow-lg">
      <div className='flex flex-col items-center mb-6'>
        <img src={image} alt="" />
      <h2 className="font-semibold text-gray-600 mb-2">Aryventory</h2>
      <h1 className="text-xl font-bold text-gray-800 mb-2">Terms of Service</h1>
      <p className="text-center text-gray-700 mb-2">
        Welcome to Aryventory—your smart inventory management solution. By using our app, you agree to comply with and be bound by the following terms and conditions. Please read them carefully.
      </p>
      </div>


      <div className="space-y-4">
        {terms.map((term, idx) => {
          const isOpen = openIndex === idx;
          return (
            <div key={idx} className="bg-white rounded-2xl shadow-md overflow-hidden">
              <button
                onClick={() => toggle(idx)}
                className="w-full flex justify-between items-center px-4 py-3  hover:text-[#F89320] transition"
              >
                <span className="font-medium text-lg rounded-2xl hover:text-[#F89320] p-1 text-gray-800">{idx + 1}. {term.title}</span>
                {isOpen ? (
                  <FaChevronUp className="text-gray-500" />
                ) : (
                  <FaChevronDown className="text-gray-500" />
                )}
              </button>

              <div
                className={`overflow-hidden transition-all  duration-300 ${
                  isOpen ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <ul className="list-disc pl-9 space-y-2">
                  {term.content.map((point, i) => (
                    <li key={i} className='px-4 pb-1'>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          );
        })}
      </div>

      <p className="mt-8 text-sm text-gray-600">
        By continuing to use Aryventory, you confirm that you’ve read, understood, and agreed to abide by these Terms of Service.
      </p>
      <p className="text-sm text-gray-600">
        For any queries, please contact us through the app support section.
      </p>
    </div>
  )
}

export default Termsofservice