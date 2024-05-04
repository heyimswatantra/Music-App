"use client"
import { StickyScroll } from "./ui/sticky-scroll-reveal"

export default function WhyChooseUs() {
    const musicSchoolContent = [
        {
            title: "Expert Instructors",
            description: "Learn from experienced and talented instructors who are passionate about music and dedicated to helping you succeed."
        },
        {
            title: "Wide Range of Instruments",
            description: "Explore your musical interests with a wide variety of instruments available for learning, including guitar, piano, drums, violin, and more."
        },
        {
            title: "Flexible Learning Options",
            description: "Choose from flexible learning options including private lessons, group classes, and online courses, tailored to fit your schedule and learning style."
        },
        {
            title: "Performance Opportunities",
            description: "Get the chance to showcase your skills and gain confidence through regular performance opportunities, including recitals, concerts, and competitions."
        },
        {
            title: "Supportive Community",
            description: "Join a supportive community of fellow music enthusiasts where you can share experiences, collaborate, and grow together in your musical journey."
        }
    ];
    
    

    return (
        <div>
            <StickyScroll content={musicSchoolContent} />
        </div>
    )
}
