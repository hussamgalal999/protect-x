import { Button } from "@/components/ui/button"
import { Shield, Zap, Lock, Users, Download, ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Shield className="h-6 w-6 text-blue-600" />
          <span className="ml-2 text-2xl font-bold text-gray-900">ProtectX</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-blue-50">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Protect Your Digital World with ProtectX
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-600 md:text-xl">
                  Advanced antivirus solution for complete protection against malware, ransomware, and online threats.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">Get Started</Button>
                <Button variant="outline">Learn More</Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-white">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Key Features</h2>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Zap className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Real-time Protection</h3>
                <p className="text-gray-600">Continuous scanning and instant threat neutralization.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Lock className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Secure Browsing</h3>
                <p className="text-gray-600">Safe online transactions and identity protection.</p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h3 className="text-lg font-bold mb-2">Multi-device Support</h3>
                <p className="text-gray-600">Protect all your devices with a single subscription.</p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Ready to Secure Your Digital Life?</h2>
                <p className="mx-auto max-w-[600px] text-gray-600 md:text-xl">
                  Download ProtectX now and experience unparalleled protection for all your devices.
                </p>
              </div>
              <Button className="bg-blue-600 text-white hover:bg-blue-700">
                <Download className="mr-2 h-4 w-4" /> Download Now
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-600">© 2023 ProtectX Inc. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}