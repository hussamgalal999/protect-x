import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Check } from "lucide-react"

export default function PricingPage() {
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
              Simple, Transparent Pricing
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Choose the plan that's right for you and enjoy comprehensive protection for all your devices.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Basic</h3>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">$29.99</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Protection for 1 device</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Real-time antivirus</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Web protection</span>
                  </li>
                </ul>
                <Button className="mt-auto">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-blue-600 rounded-lg shadow-lg text-white">
                <h3 className="text-2xl font-bold text-center mb-4">Premium</h3>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">$49.99</span>
                  <span>/year</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span>Protection for up to 5 devices</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span>Advanced antivirus</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span>Firewall protection</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-white mr-2" />
                    <span>Password manager</span>
                  </li>
                </ul>
                <Button className="mt-auto bg-white text-blue-600 hover:bg-blue-50">Choose Plan</Button>
              </div>
              <div className="flex flex-col p-6 bg-white rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-center mb-4">Family</h3>
                <div className="text-center mb-4">
                  <span className="text-4xl font-bold">$79.99</span>
                  <span className="text-gray-600">/year</span>
                </div>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Protection for up to 10 devices</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>All Premium features</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Parental controls</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>Identity theft protection</span>
                  </li>
                </ul>
                <Button className="mt-auto">Choose Plan</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold mb-2">Can I switch plans?</h3>
                <p className="text-gray-600">Yes, you can upgrade or downgrade your plan at any time. The new rate will be prorated for the remainder of your billing cycle.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Is there a money-back guarantee?</h3>
                <p className="text-gray-600">We offer a 30-day money-back guarantee on all our plans. If you're not satisfied, we'll refund your purchase no questions asked.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">How often are updates released?</h3>
                <p className="text-gray-600">We release updates regularly to ensure you're always protected against the latest threats. Updates are automatic and don't require any action on your part.</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Do you offer business plans?</h3>
                <p className="text-gray-600">Yes, we offer customized plans for businesses of all sizes. Please contact our sales team for more information on our business solutions.</p>
              </div>
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