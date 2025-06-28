const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a3c4d] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center mb-4">
              <img
                src="/lovable-uploads/WhatsApp Image 2025-05-13 at 18.00.50 (1).png"
                alt="Clans Logo"
                className="h-8"
              />
            </div>
            <p className="text-gray-300 mb-6 max-w-xs mt-4">
              Bringing clean, affordable solar energy to homes and businesses
              across Odisha.
            </p>
            <div className="flex space-x-4">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/share/16jT9Czmfp/"
                aria-label="Facebook"
                className="text-gray-300 hover:text-[#4bafdb] transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* LinkedIn (replacing Twitter) */}
              <a
                href="https://www.linkedin.com/company/clansmachinaofficial/"
                aria-label="LinkedIn"
                className="text-gray-300 hover:text-[#0077b5] transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4v14h-4V8zm7.5 0h3.8v2h.1c.5-.9 1.8-2 3.7-2 4 0 4.7 2.6 4.7 6v8h-4V15c0-1.7-.03-3.9-2.4-3.9-2.4 0-2.8 1.8-2.8 3.8v7H8V8z" />
                </svg>
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/clansmachinaofficial?igsh=MjN0cGVmMnAwNTkw"
                aria-label="Instagram"
                className="text-gray-300 hover:text-[#e1306c] transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>

              {/* YouTube */}
              <a
                href="https://youtube.com/@clansmachina?si=Qyhh3SEyAeiGnbTy"
                aria-label="YouTube"
                className="text-gray-300 hover:text-[#FF0000] transition-colors"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 576 512"
                >
                  <path d="M549.655 124.083c-6.281-23.65-24.781-42.25-48.405-48.5C455.335 64 288 64 288 64s-167.335 0-213.25 11.583c-23.625 6.25-42.125 24.85-48.405 48.5C16 168.416 16 256 16 256s0 87.584 10.345 131.917c6.281 23.65 24.781 42.25 48.405 48.5C120.665 448 288 448 288 448s167.335 0 213.25-11.583c23.625-6.25 42.125-24.85 48.405-48.5C560 343.584 560 256 560 256s0-87.584-10.345-131.917zM232 336V176l142 80-142 80z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-medium text-lg mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-[#4bafdb] transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="text-gray-300 hover:text-[#4bafdb] transition-colors"
                >
                  Benefits
                </a>
              </li>
              <li>
                <a
                  href="#calculator"
                  className="text-gray-300 hover:text-[#4bafdb] transition-colors"
                >
                  Savings Calculator
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-300 hover:text-[#4bafdb] transition-colors"
                >
                  Contact
                </a>
              </li>
              {/* <li>
                <a href="#" className="text-gray-300 hover:text-[#4bafdb] transition-colors">FAQ</a>
              </li> */}
            </ul>
          </div>

          {/* <div>
            <h3 className="font-medium text-lg mb-4">Solar Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-300 hover:text-[#4bafdb] transition-colors">Residential Solar</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#4bafdb] transition-colors">Commercial Solar</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#4bafdb] transition-colors">Solar Maintenance</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#4bafdb] transition-colors">Battery Storage</a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-[#4bafdb] transition-colors">Solar Water Heaters</a>
              </li>
            </ul>
          </div>*/}
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-gray-300 text-sm">
          <p>&copy; {currentYear} Clans. All rights reserved.</p>
          <p className="mt-2">
            Designed to help Odisha residents make the switch to clean solar
            energy.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
