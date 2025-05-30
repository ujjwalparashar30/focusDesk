import { BookOpen, Menu } from 'lucide-react'
import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

const HeaderComponent = () => {
  return (
    <header className="border-b bg-white/95 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <nav className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-bold text-slate-800" style={{ fontFamily: 'var(--font-inter)' }}>
                Focus Desk
              </span>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <Link href="#libraries" className="text-slate-600 hover:text-blue-600 transition-colors">
                Libraries
              </Link>
              <Link href="#events" className="text-slate-600 hover:text-blue-600 transition-colors">
                Events
              </Link>
              <Link href="#membership" className="text-slate-600 hover:text-blue-600 transition-colors">
                Membership
              </Link>
              <Link href="#about" className="text-slate-600 hover:text-blue-600 transition-colors">
                More
              </Link>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="outline" className="hidden md:inline-flex">
                Login
              </Button>
              <Button className="bg-blue-600 hover:bg-blue-700">
                <span className="mr-1">+</span> Register
              </Button>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="w-5 h-5" />
              </Button>
            </div>
          </nav>
        </div>
      </header>
  )
}

export default HeaderComponent