import { Mail, Phone } from "lucide-react";

const Contact = () => {
    return (
        <div className="flex flex-col items-center justify-center h-content bg-gray-100">
            <div className="bg-white shadow-xl rounded-lg p-8 max-w-md w-full">
                <h1 className="text-3xl font-bold mb-6 text-center text-gray-800">Contact me on:</h1>
                <div className="space-y-4">
                    <div className="flex items-center text-gray-700">
                        <Mail className="w-6 h-6 mr-3 text-blue-500" />
                        <a href="mailto:juliamalovi@gmail.com" className="hover:text-blue-500 transition-colors duration-300">juliamalovi@gmail.com</a>
                    </div>
                    <div className="flex items-center text-gray-700">
                        <Phone className="w-6 h-6 mr-3 text-green-500" />
                        <a href="tel:+35679349382" className="hover:text-green-500 transition-colors duration-300">(+356) 79349382</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact