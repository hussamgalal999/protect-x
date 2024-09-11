import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Download, Settings, Lock } from "lucide-react"

export default function GetStartedPage() {
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
              Get Started with ProtectX
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Follow these simple steps to set up ProtectX and start protecting your digital life.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-12">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Download ProtectX</h2>
                  <p className="text-gray-600 mb-4">
                    Visit our download page and select the version that matches your operating system.
                  </p>
                  <Button className="inline-flex items-center">
                    <Download className="mr-2 h-4 w-4" /> Download Now
                  </Button>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Install the Software</h2>
                  <p className="text-gray-600 mb-4">
                    Run the installer and follow the on-screen instructions. The process is quick and straightforward.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Create Your Account</h2>
                  <p className="text-gray-600 mb-4">
                    Launch ProtectX and create your account. This will allow you to manage your subscription and access additional features.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  4
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Configure Your Settings</h2>
                  <p className="text-gray-600 mb-4">
                    Customize ProtectX to your preferences. You can adjust scan schedules, notification settings, and more.
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center text-xl font-bold">
                  5
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-2">Run Your First Scan</h2>
                  <p className="text-gray-600 mb-4">
                    Perform your first full system scan to ensure your device is free from existing threats.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
              Need Help?
            </h2>
            <p className="text-xl text-gray-600 text-center mb-8 max-w-3xl mx-auto">
              If you encounter any issues during the setup process, our support team is here to assist you.
            </p>
            <div className="flex justify-center">
              <Button className="inline-flex items-center">
                <Link href="/contact">Contact Support</Link>
              </Button>
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