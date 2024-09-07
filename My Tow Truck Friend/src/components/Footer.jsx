import { platformLinks, communityLinks } from "../constants";
import send from "../assets/send.png";
import facebook from "../assets/facebook.png"
import inster from "../assets/instagram.png"
import twiter from "../assets/twitter.png"

const Footer = () => {
  return (
    <footer className="mt-20 border-t py-5 border-gray-700 bg-gray-500">
      <div className="flex flex-row items-start justify-center space-x-20">
        <div>
          <h3 className="text-2xl font-semibold mb-3">TOWY</h3>
          <h3 className="text-xs mb-1 text-white">copywright © TOWY ltd.</h3>
          <h3 className="text-xs text-white mb-6">All rights reserved</h3>
          <div className="flex space-x-3">
            <img src={inster} className="h-6 w-6" alt="Instagram" />
            <img src={facebook} className="h-6 w-6" alt="Facebook" />
            <img src={twiter} className="h-6 w-6" alt="Instagram" />
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-3 text-white">Platform</h3>
          <ul className="space-y-2 text-xl">
            {platformLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-white">Community</h3>
          <ul className="space-y-2 text-xl">
            {communityLinks.map((link, index) => (
              <li key={index}>
                <a
                  href={link.href}
                  className="text-neutral-300 hover:text-white"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-3 text-white">Stay Up to Date</h3>
          <div className="relative w-full">
            <input
              placeholder="Email address"
              className="w-full p-3 pr-12 rounded-lg"
            />
            <button className="absolute inset-y-0 right-0 flex items-center pr-3">
              <img src={send} alt="Send" className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
