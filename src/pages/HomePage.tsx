import { Card, CardContent } from "@/components/ui/card"
import profilePhoto from "../assets/me.jpg";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";

const HomePage = () => {
    return (
        <Card className="w-full my-6">
            <CardContent className="p-6 flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                    <Avatar>
                        <AvatarImage className="w-72 rounded-full" src={profilePhoto} alt="Profile picture" />
                    </Avatar>
                </div>
                <div className="flex-grow">
                    <h3 className="text-xl mb-4">Hi, I am Yuliia Malovichko and I am a Frontend Developer.</h3>
                    <h2 className="text-2xl font-bold mb-4">Professional Experience</h2>
                    <ul className="list-disc list-inside space-y-2">
                        <li>10 years of software development experience.</li>
                        <li>Specialized in ReactJS frontend development for the past 5 years.</li>
                        <li>4.5 years in sports betting (worked in Tipico – the leading provider in Germany).</li>
                        <li>Gained valuable experience in decentralized wallets while working for a Web3 crypto company (Qredo LTD).</li>
                        <li>Accumulated 6 years of experience in a full-stack role, primarily focusing on backend development using Java.</li>
                        <li>Developed a solid understanding of fundamental software development concepts including object-oriented programming and design patterns.</li>
                        <li>Acquired hands-on experience with various database technologies, including SQL, NoSQL, and PL/SQL.</li>
                    </ul>
                </div>
            </CardContent>
        </Card>
    )
}

export default HomePage