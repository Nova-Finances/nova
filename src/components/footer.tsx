import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative pt-16 pb-16 px-4 sm:px-6 lg:px-8 border-t border-white/10 mt-0">
      <div className="max-w-7xl mx-auto">
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div>
            <h4 className="font-semibold text-lg mb-4">Product</h4>
            <ul className="space-y-2 text-white/40">
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  How it works
                </button>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Company</h4>
            <ul className="space-y-2 text-white/40">
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  Team
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Legal</h4>
            <ul className="space-y-2 text-white/40">
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  Privacy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  Terms
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="hover:text-white transition-colors"
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Social</h4>
            <ul className="space-y-2 text-white/40">
              <li>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  X
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"
              alt="NOVA Logo"
              width={40}
              height={40}
              className="w-12 h-12 shrink-0"
            />
            <span className="text-2xl font-bold text-gradient-brand font-['Unbounded']">
              NOVA
            </span>
          </div>
          <p className="text-sm text-white/40">
            © 2025 NOVA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
