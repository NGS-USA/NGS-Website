import { ArrowLeft } from 'lucide-react';

function Privacy() {
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

          {/* ── PRIVACY POLICY ── */}
          <section>
            <h1 className="text-5xl font-bold mb-4">
              Privacy <span className="text-purple-400">Policy</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-400 to-purple-600 mb-8"></div>
            <p className="text-gray-400 mb-4">Last Updated: [3/27/26]</p>
            <p className="text-gray-300 leading-relaxed mb-4">
              NGS ("we," "our," or "us") operates the following websites:
            </p>
            <ul className="list-disc list-inside space-y-1 ml-4 text-gray-300 mb-12">
              <li>ngs-us.net</li>
              <li>ngs-us.org</li>
              <li>ngs-solutions.net</li>
            </ul>

            <div className="space-y-8 text-gray-300 leading-relaxed">
              <div>
                <h2 className="text-2xl font-bold text-white mb-3">1. Information We Collect</h2>
                <p className="mb-3">We collect two types of information:</p>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Information You Provide</h3>
                <p className="mb-4">
                  This includes your name, email address, phone number, and the content of any messages you send us through our contact forms or direct communication.
                </p>
                <h3 className="text-lg font-semibold text-purple-400 mb-2">Technical Data</h3>
                <p>
                  We may also automatically collect technical information such as your IP address, browser type, and usage data when you visit our websites.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">2. How We Use Your Information</h2>
                <p className="mb-3">We use the information we collect to:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>Respond to your inquiries and requests</li>
                  <li>Provide and manage our services</li>
                  <li>Improve our systems and user experience</li>
                  <li>Ensure the security of our platforms</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">3. Legal Basis</h2>
                <p className="mb-3">We process your personal data under the following legal bases:</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="text-white font-medium">Consent</span> — where you have given us permission to use your data</li>
                  <li><span className="text-white font-medium">Contract</span> — where processing is necessary to fulfill a service agreement</li>
                  <li><span className="text-white font-medium">Legitimate Interest</span> — where we have a valid business reason that does not override your rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">4. Sharing Your Information</h2>
                <p className="mb-3">
                  NGS does not sell your personal data. We may share your information in the following limited circumstances:
                </p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li><span className="text-white font-medium">Service Providers</span> — trusted third parties such as hosting providers and Formspree that help us operate our services</li>
                  <li><span className="text-white font-medium">Legal Authorities</span> — where required by law or to protect our rights</li>
                </ul>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">5. Data Retention</h2>
                <p>
                  We retain your personal data for as long as necessary to fulfill the purposes outlined in this policy, or as required by applicable business and legal obligations.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">6. Security</h2>
                <p>
                  We implement reasonable security safeguards to protect your personal information. However, no method of transmission over the internet is completely secure, and we cannot guarantee absolute security.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">7. Children's Privacy</h2>
                <p>
                  Our websites and services are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13.
                </p>
              </div>

              <div>
                <h2 className="text-2xl font-bold text-white mb-3">8. Changes to This Policy</h2>
                <p>
                  We may update this Privacy Policy at any time. Any changes will be posted on this page with an updated "Last Updated" date. Continued use of our websites after changes are made constitutes acceptance of the revised policy.
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
              If you have any questions about this Privacy Policy, please contact us:
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

export default Privacy;
