import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Download, Monitor, Apple, Smartphone } from "lucide-react"

export default function DownloadPage() {
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
              Download ProtectX
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              Choose the version that's right for your device and start protecting your digital life today.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <Monitor className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Windows</h2>
                <p className="text-gray-600 mb-4">
                  Compatible with Windows 10 and 11
                </p>
                <Button className="mt-auto inline-flex items-center">
                  <Download className="mr-2 h-4 w-4" /> Download for Windows
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <Apple className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-2">macOS</h2>
                <p className="text-gray-600 mb-4">
                  Compatible with macOS 10.15 and later
                </p>
                <Button className="mt-auto inline-flex items-center">
                  <Download className="mr-2 h-4 w-4" /> Download for macOS
                </Button>
              </div>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-lg shadow-lg">
                <Smartphone className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-2xl font-bold mb-2">Android</h2>
                <p className="text-gray-600 mb-4">
                  Compatible with Android 8.0 and later
                </p>
                <Button className="mt-auto inline-flex items-center">
                  <Download className="mr-2 h-4 w-4" /> Download for Android
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
              System Requirements
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Monitor className="h-6 w-6 mr-2 text-blue-600" />
                  <span>Windows</span>
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Windows 10 or 11 (32-bit or 64-bit)</li>
                  <li>2 GB RAM</li>
                  <li>1.5 GB free hard disk space</li>
                  <li>Intel Pentium 4 / AMD Athlon 64 processor or above</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Apple className="h-6 w-6 mr-2 text-blue-600" />
                  macOS
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>macOS 10.15 (Catalina) or later</li>
                  <li>2 GB RAM</li>
                  <li>1.5 GB free hard disk space</li>
                  <li>Any Intel x86 or Apple M1 processor</li>
                </ul>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-bold mb-4 flex items-center">
                  <Smartphone className="h-6 w-6 mr-2 text-blue-600" />
                  Android
                </h3>
                <ul className="list-disc list-inside space-y-2 text-gray-600">
                  <li>Android 8.0 or later</li>
                  <li>50 MB free storage space</li>
                  <li>Internet connection for updates and cloud features</li>
                </ul>
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