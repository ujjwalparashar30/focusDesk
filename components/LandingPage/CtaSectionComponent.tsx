import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CtaSectionComponent() {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-white mb-6" style={{ fontFamily: 'var(--font-inter)' }}>
          Ready to transform your study experience?
        </h2>
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join thousands of students who have already discovered their perfect study environment with Focus Desk.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100 text-lg px-8 py-4">
            Start Free Today
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600 text-lg px-8 py-4">
            Watch Demo
          </Button>
        </div>
      </div>
    </section>
  )
}
