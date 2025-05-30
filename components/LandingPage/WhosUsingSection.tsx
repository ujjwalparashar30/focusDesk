import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, HeartHandshake, Building, BookOpen } from "lucide-react"

export default function WhosUsingSectionComponent() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            Who's using Focus Desk?
          </h2>
          <p className="text-xl text-slate-600">
            Trusted by students, educators, and institutions worldwide
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-blue-50 border-blue-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mb-4">
                <img src="/library.png" alt="" />
              </div>
              <CardTitle className="text-slate-800">Students and Self-Learners</CardTitle>
              <CardDescription className="text-slate-600">
                Boost Your Productivity: Find the perfect place to study, focus deeply, and stay consistent
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Libraries</Badge>
                <Badge variant="secondary">Focus Mode</Badge>
                <Badge variant="secondary">Resources</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-purple-50 border-purple-200 hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-16 h-16 bg-purple-100 rounded-2xl flex items-center justify-center mb-4">
                <img src="/mentor.png" alt="" />
              </div>
              <CardTitle className="text-slate-800">Mentors and Educators</CardTitle>
              <CardDescription className="text-slate-600">
                Inspire the Next Generation: Guide students with mentorship and real-world strategies
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Mentorship</Badge>
                <Badge variant="secondary">Task Management</Badge>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-yellow-50 border-yellow-200 hover:shadow-lg transition-shadow">
            <CardHeader className="flex flex-col items-center">
              <div className="w-full h-32 rounded-2xl flex items-center justify-center mb-1 bg-amber-300">
                <img src="/libraryowner.png" alt="" className="w-32 h-32" />
              </div>
              <CardTitle className="text-slate-800">Colleges and Study Clubs</CardTitle>
              <CardDescription className="text-slate-600">
                Empower Academic Success: Partner with Focus Desk to bring structured, distraction-free environments to students
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">Library Booking System</Badge>
                <Badge variant="secondary">Mentorship Programs</Badge>
              </div>
            </CardContent>
          </Card>
        </div>
        {/* Trusted By Section */}
        <div className="text-center">
          <h3 className="text-2xl font-semibold text-slate-800 mb-8">Trusted By</h3>
          <div className="flex justify-center items-center space-x-12 opacity-60">
            <div className="text-center">
              <div className="text-red-600 text-2xl font-bold mb-2">DTU</div>
              <div className="text-xs text-slate-500">University</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center mb-2">
                <span className="text-white font-bold">E</span>
              </div>
              <div className="text-xs text-slate-500">E-Cell</div>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-2">
                <div className="w-6 h-6 bg-white rounded"></div>
              </div>
              <div className="text-xs text-slate-500">Hackathons</div>
            </div>
            <div className="text-center">
              <BookOpen className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500">Local Libraries</div>
            </div>
            <div className="text-center">
              <HeartHandshake className="w-12 h-12 text-blue-600 mx-auto mb-2" />
              <div className="text-xs text-slate-500">Student Unions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
