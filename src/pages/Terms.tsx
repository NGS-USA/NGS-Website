import { ArrowLeft } from 'lucide-react';

function Terms() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <nav className="fixed top-0 w-full bg-black/90 backdrop-blur-sm z-50 border-b border-purple-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-3">
              <img src="/icon-transparent.png" alt="NGS Logo" className="h-12 w-12" />
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
                NGS
              </span>
            </div>
            <a
              href="/"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
            >
              <ArrowLeft size={20} />
              Back to Home
            </a>
          </div>
        </div>
      </nav>

      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto space-y-20">

          {/* ── TERMS OF SERVICE ── */}
          <section>
            <h1 className="text-5xl font-bold mb-4">
              Terms of <span className="text-purple-400">Service</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mb-8"></div>
            <p className="text-gray-400 mb-12">Last Updated: [3/27/26]</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">1. Services</h2>
                <p>NGS provides SaaS, hosting, and software development services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">2. User Responsibilities</h2>
                <p>Users agree not to engage in illegal use or abuse of NGS systems and services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">3. Accounts & Data</h2>
                <p>Users are responsible for maintaining the security of their credentials and for ensuring appropriate backups of their data.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">4. Payments</h2>
                <p>Failure to make required payments may result in suspension or termination of services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">5. Acceptable Use</h2>
                <p>Users may not use NGS services to distribute malware, conduct attacks, or violate intellectual property rights.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">6. Availability</h2>
                <p>NGS does not guarantee any specific uptime or availability of its services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">7. Liability</h2>
                <p>NGS is not liable for damages, data loss, or losses arising from the use or inability to use our services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">8. Indemnification</h2>
                <p>Users agree to indemnify and hold NGS harmless from any claims, damages, or expenses arising from their use of our services.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">9. Termination</h2>
                <p>NGS reserves the right to suspend or terminate services at our discretion, with or without notice.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">10. Governing Law</h2>
                <p>These Terms of Service are governed by the laws of the Commonwealth of Virginia.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">11. Changes</h2>
                <p>NGS may update these Terms at any time. Continued use of our services after changes are posted constitutes acceptance of the revised Terms.</p>
              </div>
            </div>
          </section>

          <div className="border-t border-purple-900/30"></div>

          {/* ── DISCLAIMER ── */}
          <section>
            <h1 className="text-5xl font-bold mb-4">
              <span className="text-purple-400">Disclaimer</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mb-8"></div>
            <p className="text-gray-400 mb-12">Last Updated: [Insert Date]</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">1. No Professional Advice</h2>
                <p>All content provided by NGS is for informational purposes only and does not constitute professional, legal, or financial advice.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">2. SaaS & Hosting Disclaimer</h2>
                <p>NGS services are provided "as-is" without warranties or guarantees of any kind, express or implied.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">3. Liability</h2>
                <p>NGS is not liable for outages, data loss, or any damages arising from the use of our services or reliance on any information provided.</p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">4. External Links</h2>
                <p>NGS is not responsible for the content, accuracy, or practices of third-party websites. Use of external links is at your own risk.</p>
              </div>
            </div>
          </section>

          <div className="border-t border-purple-900/30"></div>

          {/* ── COOKIE POLICY ── */}
          <section>
            <h1 className="text-5xl font-bold mb-4">
              Cookie <span className="text-purple-400">Policy</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mb-8"></div>
            <p className="text-gray-400 mb-12">Last Updated: [Insert Date]</p>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">1. Introduction</h2>
                <p className="mb-3">NGS ("we," "our," or "us") operates the following websites:</p>
                <ul className="list-disc list-inside space-y-1 ml-4">
                  <li>ngs-us.net</li>
                  <li>ngs-us.org</li>
                  <li>ngs-solutions.net</li>
                </ul>
                <p className="mt-3">
                  This Cookie Policy explains how we use cookies and similar technologies when you visit our websites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">2. What Are Cookies</h2>
                <p>
                  Cookies are small text files stored on your device (computer, tablet, or mobile) when you visit a website. They help websites function properly and improve user experience.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">3. How We Use Cookies</h2>
                <p className="mb-3">We use cookies to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Ensure the website functions correctly</li>
                  <li>Improve performance and user experience</li>
                  <li>Analyze website traffic and usage patterns</li>
                  <li>Enhance security and prevent fraudulent activity</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">4. Types of Cookies We Use</h2>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Essential Cookies</h3>
                <p className="mb-4">
                  These cookies are necessary for the operation of our website and services, including SaaS and hosting functionality. Without these cookies, certain features may not work properly.
                </p>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Performance and Analytics Cookies</h3>
                <p>
                  These cookies help us understand how visitors interact with our website, allowing us to improve performance and usability.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">5. Third-Party Cookies</h2>
                <p className="mb-3">
                  We may use third-party services (such as analytics providers or infrastructure tools) that place cookies on your device.
                </p>
                <p>
                  These third parties may collect and process your data according to their own privacy policies. NGS is not responsible for the practices of these third-party providers.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">6. Managing Cookies</h2>
                <p className="mb-3">You can control or disable cookies through your browser settings.</p>
                <p className="mb-2">Please note:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Disabling cookies may affect the functionality of certain parts of the website</li>
                  <li>Some features may not work as intended without cookies</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">7. Updates to This Policy</h2>
                <p>
                  We may update this Cookie Policy from time to time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of the website after changes are made constitutes acceptance of the updated policy.
                </p>
              </div>
            </div>
          </section>

          <div className="border-t border-purple-900/30"></div>

          {/* ── CONTACT ── */}
          <section>
            <h2 className="text-3xl font-bold text-white mb-4">
              Contact <span className="text-purple-400">Information</span>
            </h2>
            <p className="text-gray-300 leading-relaxed">
              If you have any questions about these policies, please contact us:
            </p>
            <div className="mt-6 space-y-2 text-gray-300">
              <p>
                <span className="text-white font-medium">Email:</span>{' '}
                <a href="mailto:info@ngs-us.net" className="text-purple-400 hover:underline">
                  info@ngs-us.net
                </a>
              </p>
              <p>
                <span className="text-white font-medium">Websites:</span>{' '}
                <a href="https://ngs-us.net" className="text-purple-400 hover:underline">ngs-us.net</a>
                {' | '}
                <a href="https://ngs-us.org" className="text-purple-400 hover:underline">ngs-us.org</a>
                {' | '}
                <a href="https://ngs-solutions.net" className="text-purple-400 hover:underline">ngs-solutions.net</a>
              </p>
            </div>
          </section>

        </div>
      </div>

      <footer className="bg-black border-t border-purple-900/20 py-8 px-4 sm:px-6 lg:px-8 text-center text-gray-400">
        &copy; 2024 NGS. All rights reserved.
      </footer>
    </div>
  );
}

export default Terms;
