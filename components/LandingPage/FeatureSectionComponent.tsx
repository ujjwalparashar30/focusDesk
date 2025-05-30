import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { MapPin, Calendar, Clock, Users, Star, CheckCircle } from "lucide-react"

export default function FeaturesSectionComponent() {
  return (
    <section id="libraries" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4" style={{ fontFamily: 'var(--font-inter)' }}>
            Everything you need to succeed
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            From finding the perfect study spot to connecting with mentors, Focus Desk provides all the tools you need for academic success.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-green-600" />
              </div>
              <CardTitle>Library Discovery</CardTitle>
              <CardDescription>
                Find quiet study spaces across the city with real-time availability
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Calendar className="w-6 h-6 text-blue-600" />
              </div>
              <CardTitle>Smart Booking</CardTitle>
              <CardDescription>
                Reserve your preferred spots and amenities with our intelligent booking system
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-purple-600" />
              </div>
              <CardTitle>Focus Mode</CardTitle>
              <CardDescription>
                Track your study sessions and maintain consistent productivity habits
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-orange-600" />
              </div>
              <CardTitle>Study Groups</CardTitle>
              <CardDescription>
                Connect with fellow learners and join study groups in your area
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Star className="w-6 h-6 text-red-600" />
              </div>
              <CardTitle>Premium Amenities</CardTitle>
              <CardDescription>
                Access to high-speed WiFi, power outlets, printing services, and more
              </CardDescription>
            </CardHeader>
          </Card>
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <CheckCircle className="w-6 h-6 text-yellow-600" />
              </div>
              <CardTitle>Progress Tracking</CardTitle>
              <CardDescription>
                Monitor your study goals and celebrate your achievements
              </CardDescription>
            </CardHeader>
          </Card>
        </div>
      </div>
    </section>
  )
}
