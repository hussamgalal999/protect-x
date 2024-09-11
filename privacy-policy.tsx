import Link from "next/link"
import { Shield } from "lucide-react"

export default function PrivacyPolicyPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="/">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">ProtectX</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/">
            Home
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/features">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/pricing">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/about">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="/contact">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-50">
          <div className="container px-4 md:px-6">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-8">
              Privacy Policy
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="prose max-w-none">
              <h2>1. Information We Collect</h2>
              <p>
                We collect information you provide directly to us, such as when you create an account, subscribe to our service, or contact us for support. This may include your name, email address, payment information, and device information.
              </p>

              <h2>2. How We Use Your Information</h2>
              <p>
                We use the information we collect to:
              </p>
              <ul>
                <li>Provide, maintain, and improve our services</li>
                <li>Process transactions and send related information</li>
                <li>Send you technical notices, updates, security alerts, and support messages</li>
                <li>Respond to your comments, questions, and requests</li>
                <li>Develop new products and services</li>
              </ul>

              <h2>3. Information Sharing and Disclosure</h2>
              <p>
                We do not share your personal information with third parties except as described in this policy. We may share your information with:
              </p>
              <ul>
                <li>Service providers who perform services on our behalf</li>
                <li>Law enforcement or government agencies in response to legal requests</li>
                <li>Other parties in connection with a company transaction, such as a merger or sale of assets</li>
              </ul>

              <h2>4. Data Security</h2>
              <p>
                We take reasonable measures to help protect your personal information from loss, theft, misuse, unauthorized access, disclosure, alteration, and destruction.
              </p>

              <h2>5. Your Choices</h2>
              <p>
                You can access and update certain information about your account by logging into your account settings. You can also opt-out of receiving promotional communications from us by following the instructions in those messages.
              </p>

              <h2>6. Cookies and Similar Technologies</h2>
              <p>
                We use cookies and similar technologies to collect information about your browsing activities and to personalize your experience on our website.
              </p>

              <h2>7. Children's Privacy</h2>
              <p>
                Our services are not directed to children under 13, and we do not knowingly collect personal information from children under 13.
              </p>

              <h2>8. Changes to This Policy</h2>
              <p>
                We may update this privacy policy from time to time. We will notify you of any changes by posting the new privacy policy on this page.
              </p>

              <h2>9. Contact Us</h2>
              <p>
                If you have any questions about this privacy policy, please contact us at <a href="mailto:privacy@protectx.com" className="text-blue-600 hover:underline">privacy@protectx.com</a>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2023 ProtectX Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="/terms-of-service">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="/privacy-policy">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}