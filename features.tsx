import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Zap, Lock, Users, Globe, Cloud, Bell, Cpu } from "lucide-react"

export default function FeaturesPage() {
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
              ProtectX Features
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Discover the powerful features that make ProtectX the ultimate defense against digital threats.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">Real-time Protection</h2>
                <p className="text-gray-600 mb-4">
                  Our advanced algorithms continuously scan your system, providing instant threat neutralization to keep you safe at all times.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">Secure Browsing</h2>
                <p className="text-gray-600 mb-4">
                  Enjoy worry-free online transactions with our secure browsing feature that protects your identity and sensitive information.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">Multi-device Support</h2>
                <p className="text-gray-600 mb-4">
                  Protect all your devices with a single subscription. ProtectX works seamlessly across desktop, mobile, and tablet platforms.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Globe className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">Global Threat Intelligence</h2>
                <p className="text-gray-600 mb-4">
                  Our global network of security experts continuously update our threat database to protect you against the latest cyber threats.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Cloud className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">Cloud-based Scanning</h2>
                <p className="text-gray-600 mb-4">
                  Leverage the power of cloud computing for faster, more efficient virus scanning without slowing down your device.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Bell className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">Smart Alerts</h2>
                <p className="text-gray-600 mb-4">
                  Receive intelligent notifications about potential threats and system vulnerabilities, allowing you to take action quickly.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
              System Requirements
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Cpu className="h-6 w-6 mr-2 text-blue-600" />
                  Windows
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Windows 10 or later</li>
                  <li>2 GB RAM</li>
                  <li>1.5 GB free hard disk space</li>
                  <li>Intel Pentium 4 / AMD Athlon 64 processor or above</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Cpu className="h-6 w-6 mr-2 text-blue-600" />
                  macOS
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>macOS 10.15 (Catalina) or later</li>
                  <li>2 GB RAM</li>
                  <li>1.5 GB free hard disk space</li>
                  <li>Any Intel x86 or Apple M1 processor</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Ready to Secure Your Digital Life?
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                Download ProtectX now and experience unparalleled protection for all your devices.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                Download Now
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