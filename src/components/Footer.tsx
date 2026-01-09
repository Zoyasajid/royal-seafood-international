export function Footer() {
    return (
      <footer className="bg-gray-700 text-sky-100/80">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-16">
          <div className="flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-16">
            
            {/* Company Info */}
            <div className="flex-1">
              <p className="text-base font-semibold uppercase tracking-wider text-white">
                Royal Sea Food International
              </p>
              <p className="mt-2 text-sm text-sky-100/80 max-w-xs">
                A global partner for premium fresh and frozen seafood, connecting certified producers with importers, distributors, and retailers worldwide.
              </p>
            </div>
  
            {/* Pages */}
            <div className="flex-1">
              <p className="font-semibold uppercase mb-2 text-white">Pages</p>
              <ul className="space-y-1 text-sm">
                <li>
                  <a href="/" className="hover:text-white transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/product" className="hover:text-white transition-colors">
                    Product
                  </a>
                </li>
                <li>
                  <a href="/contact" className="hover:text-white transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
  
            {/* Contact Info */}
            <div className="flex-1">
              <p className="font-semibold uppercase mb-2 text-white">Contact</p>
              <ul className="space-y-1 text-sm">
                <li>Email: info@royalseafood.com</li>
                <li>Phone: +92 300 1234567</li>
                <li>Address: 123 Seafood Street, Karachi, Pakistan</li>
              </ul>
            </div>
          </div>
  
          {/* Footer Bottom */}
          <div className="border-t border-gray-400/40 mt-10 pt-6 text-center text-xs text-gray-400">
            <p>© 2023 Royal Seafood International.</p>
            <p>All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  