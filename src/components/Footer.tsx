import { useState, useRef, useEffect } from "react"

const Footer = () => {
    const [animationDuration, setAnimationDuration] = useState(0)
    const textRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        if (textRef.current) {
            const textWidth = textRef.current.offsetWidth
            const duration = textWidth / 50
            setAnimationDuration(duration)
        }
    }, [])

    return (
        <footer className="fixed bottom-0 left-0 w-full bg-primary text-primary-foreground py-2 overflow-hidden h-footer">
            <div
                className="whitespace-nowrap inline-block animate-marquee"
                style={{ animationDuration: `${animationDuration}s` }}
                ref={textRef}
            >
                <span className="mx-4 text-lg font-semibold">Work in Progress</span>
                <span className="mx-4 text-lg font-semibold">Work in Progress</span>
                <span className="mx-4 text-lg font-semibold">Work in Progress</span>
                <span className="mx-4 text-lg font-semibold">Work in Progress</span>
            </div>
        </footer>
    )
}

export default Footer