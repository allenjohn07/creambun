'use client'

import Link from "next/link"
import { Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { FaLinkedin } from "react-icons/fa"

export default function ContactComponent() {
  return (
    <div>
      <div className="text-center">
        <p className="text-muted-foreground mb-8 max-w-md mx-auto">
          I&apos;m always open to new opportunities and conversations. Feel free to reach out through email or LinkedIn.
        </p>
        <div className="space-y-4">
          <Button asChild className="w-full max-w-xs">
            <Link href="mailto:allenjohnmonapallil@gmail.com" className="flex items-center justify-center space-x-2">
              <Mail size={18} />
              <span>Send an email</span>
            </Link>
          </Button>
          <Button asChild variant="outline" className="w-full max-w-xs">
            <Link
              href="https://www.linkedin.com/in/allenjohn07"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center space-x-2"
            >
              <FaLinkedin size={18} />
              <span>Message on LinkedIn</span>
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

