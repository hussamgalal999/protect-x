import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Award, Users, TrendingUp } from "lucide-react"

export default function AboutPage() {
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
              About ProtectX
            </h1>
            <p className="text-xl text-gray-600 text-center mb-12 max-w-3xl mx-auto">
              We're on a mission to make the digital world safer for everyone. Learn about our journey, our team, and our commitment to your online security.
            </p>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">Our Mission</h2>
                <p className="text-gray-600">
                  To provide cutting-edge cybersecurity solutions that protect individuals and businesses from ever-evolving digital threats.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Award className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">Our Achievements</h2>
                <p className="text-gray-600">
                  Recognized as a leader in antivirus software by independent testing labs and trusted by millions of users worldwide.
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <Users className="h-12 w-12 text-blue-600 mb-4" />
                <h2 className="text-xl font-bold mb-2">Our Team</h2>
                <p className="text-gray-600">
                  A diverse group of cybersecurity experts, developers, and researchers dedicated to staying ahead of cyber threats.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-center mb-8">
              Our Journey
            </h2>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right mr-4">
                  <span className="font-bold">2010</span>
                </div>
                <div className="flex-grow pl-4 border-l-2 border-blue-600">
                  <h3 className="text-xl font-bold mb-2">Founded</h3>
                  <p className="text-gray-600">ProtectX was established with a vision to create a safer digital world.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right mr-4">
                  <span className="font-bold">2015</span>
                </div>
                <div className="flex-grow pl-4 border-l-2 border-blue-600">
                  <h3 className="text-xl font-bold mb-2">Expansion</h3>
                  <p className="text-gray-600">Launched our first enterprise solution and expanded to international markets.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right mr-4">
                  <span className="font-bold">2020</span>
                </div>
                <div className="flex-grow pl-4 border-l-2 border-blue-600">
                  <h3 className="text-xl font-bold mb-2">Innovation</h3>
                  <p className="text-gray-600">Introduced AI-powered threat detection, setting new industry standards.</p>
                </div>
              </div>
              <div className="flex items-center">
                <div className="flex-shrink-0 w-24 text-right mr-4">
                  <span className="font-bold">Today</span>
                </div>
                <div className="flex-grow pl-4 border-l-2 border-blue-600">
                  <h3 className="text-xl font-bold mb-2">Leading the Way</h3>
                  <p className="text-gray-600">Continuing to innovate and protect millions of users worldwide.</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-blue-600 text-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                Join Our Team
              </h2>
              <p className="mx-auto max-w-[600px] text-blue-100 md:text-xl">
                We're always looking for talented individuals passionate about cybersecurity. Check out our open positions and help us make the internet safer.
              </p>
              <Button className="bg-white text-blue-600 hover:bg-blue-50">
                View Careers
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