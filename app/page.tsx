"use client"
import HeroSectionComponent from "@/components/LandingPage/HeroSectionComponent"
import WhosUsingSectionComponent from "@/components/LandingPage/WhosUsingSection"
import FeaturesSectionComponent from "@/components/LandingPage/FeatureSectionComponent"
import PricingSectionComponent from "@/components/LandingPage/PricingSectionComponent"
import CtaSectionComponent from "@/components/LandingPage/CtaSectionComponent"


export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-white">
      <HeroSectionComponent />
      <WhosUsingSectionComponent />
      <FeaturesSectionComponent />
      <PricingSectionComponent />
      <CtaSectionComponent />
    </div>
  )
}