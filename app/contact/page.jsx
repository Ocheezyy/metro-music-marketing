"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Label } from "@/components/ui/label"
import { Send, CheckCircle } from 'lucide-react'

export default function ContactForm() {
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        // Here you would typically handle the form submission,
        // e.g., sending the data to an API
        setIsSubmitted(true)
        setTimeout(() => setIsSubmitted(false), 3000) // Reset after 3 seconds
    }

    return (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-b from-gray-900 to-blue-900 p-4">
            <Card className="w-full max-w-md bg-gray-800 bg-opacity-50 backdrop-blur-lg border-gray-700 text-gray-100">
                <CardHeader>
                    <CardTitle className="text-2xl font-bold text-center">Contact Us</CardTitle>
                    <CardDescription className="text-center text-gray-400">
                        We&#39;d love to hear from you. Send us a message and we&#39;ll respond as soon as possible.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="name">Name</Label>
                            <Input
                                id="name"
                                placeholder="Your name"
                                required
                                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="Your email"
                                required
                                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="subject">Subject</Label>
                            <Input
                                id="subject"
                                placeholder="Subject of your message"
                                required
                                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100"
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="message">Message</Label>
                            <Textarea
                                id="message"
                                placeholder="Your message"
                                required
                                className="bg-gray-700 border-gray-600 placeholder-gray-400 text-gray-100 min-h-[100px]"
                            />
                        </div>
                        <Button
                            type="submit"
                            className="w-full bg-blue-600 hover:bg-blue-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
                        >
                            {isSubmitted ? (
                                <>
                                    <CheckCircle className="mr-2 h-4 w-4" /> Sent!
                                </>
                            ) : (
                                <>
                                    <Send className="mr-2 h-4 w-4" /> Send Message
                                </>
                            )}
                        </Button>
                    </form>
                </CardContent>
            </Card>
        </div>
    )
}