import Link from "next/link"
import { Shield } from "lucide-react"

export default function TermsOfServicePage() {
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
              Terms of Service
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Please read these terms carefully before using ProtectX services.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="prose max-w-none">
              <h2>1. Acceptance of Terms</h2>
              <p>
                By accessing or using ProtectX services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>

              <h2>2. Description of Service</h2>
              <p>
                ProtectX provides antivirus and cybersecurity protection services for various devices and operating systems. The specific features and functionality may vary depending on the subscription plan and device.
              </p>

              <h2>3. User Responsibilities</h2>
              <p>
                You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.
              </p>

              <h2>4. Privacy Policy</h2>
              <p>
                Your use of ProtectX services is also governed by our Privacy Policy, which can be found <Link href="/privacy-policy" className="text-blue-600 hover:underline">here</Link>.
              </p>

              <h2>5. Subscription and Billing</h2>
              <p>
                Certain aspects of the service may be provided for a fee. You agree to pay all fees associated with your chosen subscription plan. We may change our fees at any time by posting the changes on the ProtectX website.
              </p>

              <h2>6. Termination</h2>
              <p>
                We reserve the right to terminate or suspend your account and access to our services at any time, for any reason, without notice.
              </p>

              <h2>7. Disclaimer of Warranties</h2>
              <p>
                ProtectX services are provided "as is" without warranty of any kind. We do not guarantee that our services will be uninterrupted, secure, or error-free.
              </p>

              <h2>8. Limitation of Liability</h2>
              <p>
                ProtectX shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use of or inability to use our services.
              </p>

              <h2>9. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms of Service at any time. We will notify users of any significant changes via email or through our website.
              </p>

              <h2>10. Governing Law</h2>
              <p>
                These Terms of Service shall be governed by and construed in accordance with the laws of [Your Jurisdiction], without regard to its conflict of law provisions.
              </p>

              <h2>11. Contact Information</h2>
              <p>
                If you have any questions about these Terms of Service, please contact us at <a href="mailto:legal@protectx.com" className="text-blue-600 hover:underline">legal@protectx.com</a>.
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