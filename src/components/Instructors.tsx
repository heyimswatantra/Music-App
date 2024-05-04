"use client"
import { WavyBackground } from "./ui/wavy-background"
import { AnimatedTooltip } from "./ui/animated-tooltip";

const instructors = [
  {
    id: 1,
    name: "John Doe",
    designation: "Software Engineer",
    image:
      "https://www.bing.com/ck/a?!&&p=b2cce9b2b857f7feJmltdHM9MTcxNDc4MDgwMCZpZ3VpZD0xZWNhM2M5Zi05ZjRmLTYzN2ItMGI0OS0yODhlOWUyYjYyYzkmaW5zaWQ9NTY3Nw&ptn=3&ver=2&hsh=3&fclid=1eca3c9f-9f4f-637b-0b49-288e9e2b62c9&u=a1L2ltYWdlcy9zZWFyY2g_cT1wcm9maWxlJTIwaW1hZ2UlMjAmRk9STT1JUUZSQkEmaWQ9NTAxMDRCMTdDNEVEODM3RTJBNTk3REIyN0MwNTE0MjBCRjNEQTU0Qg&ntb=1",
  },
  {
    id: 2,
    name: "Robert Johnson",
    designation: "Product Manager",
    image:
      "https://www.bing.com/ck/a?!&&p=b2cce9b2b857f7feJmltdHM9MTcxNDc4MDgwMCZpZ3VpZD0xZWNhM2M5Zi05ZjRmLTYzN2ItMGI0OS0yODhlOWUyYjYyYzkmaW5zaWQ9NTY3Nw&ptn=3&ver=2&hsh=3&fclid=1eca3c9f-9f4f-637b-0b49-288e9e2b62c9&u=a1L2ltYWdlcy9zZWFyY2g_cT1wcm9maWxlJTIwaW1hZ2UlMjAmRk9STT1JUUZSQkEmaWQ9NTAxMDRCMTdDNEVEODM3RTJBNTk3REIyN0MwNTE0MjBCRjNEQTU0Qg&ntb=1",
  },
  {
    id: 3,
    name: "Jane Smith",
    designation: "Data Scientist",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Emily Davis",
    designation: "UX Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Tyler Durden",
    designation: "Soap Developer",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
  },
  {
    id: 6,
    name: "Dora",
    designation: "The Explorer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

export default function Instructors() {

    return (
        <div className="relative h-[70rem] overflow-hidden flex items-center justify-center">
            <WavyBackground className="w-full max-w-7xl mx-auto flex flex-col items-center justify-normal h-full">
                <h2 className="text-2xl md:text-4xl lg:text-7xl mx-auto flex flex-col items-center justify-center mb-8">Meet our Instructors
                </h2>
                <p className="text-base md:text-lg text-white text-center mb-4">Discover the talented professionals who will guide your musical joureny
                </p>
                <div className="flex flex-row items-center justify-center mb-10 w-full">
                <AnimatedTooltip items={instructors} />

                </div>
            </WavyBackground>
        </div>
    )
}
