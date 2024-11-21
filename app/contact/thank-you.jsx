import {CheckCircle} from "lucide-react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";


export default function ThankYou() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 p-4">
            <Card className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-lg border-gray-700 text-gray-100">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center flex items-center justify-center">
                        <CheckCircle className="mr-2 h-8 w-8 text-green-500"/>
                        Message Received
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-center text-gray-300 mb-4">
                        Thank you for reaching out to us. We've received your message and appreciate your interest.
                    </p>
                    <p className="text-center text-gray-300">
                        Our team will review your inquiry and get back to you as soon as possible. We typically respond
                        within 1-2 business days.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}