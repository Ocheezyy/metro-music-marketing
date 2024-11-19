"use client"

import {Button} from "@/components/ui/button";
import {ScrollArea} from "@/components/ui/scroll-area";
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {BookOpen, Paintbrush, Layers, Zap} from "lucide-react";


export default function BrandDevelopment() {
    
    return (
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden bg-gray-900 text-gray-100">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-100">Brand Development for Musicians</DialogTitle>
                <DialogDescription className="text-gray-400">
                    Define your image. Share your story. Build your legacy.
                </DialogDescription>
            </DialogHeader>
            <ScrollArea className="mt-4 h-[calc(90vh-100px)] w-full rounded-md border border-gray-700 p-6 bg-gray-800">
                <div className="space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Define Your Image. Share Your Story. Build Your Legacy.</h2>

                    <p className="text-lg text-gray-300">
                        Your personal brand is what sets you apart in the music industry. It&#39;s more than just a logo or album cover—it&#39;s the essence of who you are as an artist. We work with you to create a cohesive brand identity that reflects your style, resonates with your audience, and opens doors for new opportunities.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-100">Our brand development services include:</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <Paintbrush className="mr-2" />
                                Logo and Visual Design
                            </h4>
                            <p className="text-gray-300">Whether you need a new logo, album artwork, or merch designs, we&#39;ll create visuals that make your brand unforgettable.</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <BookOpen className="mr-2" />
                                Storytelling
                            </h4>
                            <p className="text-gray-300">We&#39;ll help you define your unique artist narrative—who you are, what your music stands for, and why it matters.</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <Layers className="mr-2" />
                                Consistency Across Platforms
                            </h4>
                            <p className="text-gray-300">From social media to your website, we ensure your branding is cohesive and professional.</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <Zap className="mr-2" />
                                Brand Strategy
                            </h4>
                            <p className="text-gray-300">We develop a comprehensive strategy to position your brand effectively in the music industry and connect with your target audience.</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-900 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Why It Matters</h3>
                        <p className="text-lg text-gray-300">
                            A strong brand not only helps fans connect with you but also catches the attention of industry professionals, leading to more gigs, collaborations, and opportunities.
                        </p>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-100">Ready to Define Your Artist Brand?</h3>
                        <p className="text-lg mb-4 text-gray-300">
                            Let&#39;s create a unique and powerful brand identity that sets you apart in the music industry. Our team of creative experts is ready to help you build your artistic legacy.
                        </p>
                        <Button size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                    </div>

                    <div className="mt-8 text-sm text-gray-400">
                        <h4 className="font-semibold mb-2">SEO Keywords:</h4>
                        <p>artist branding services, music branding for artists, how to create an artist brand, music brand development, professional artist visuals</p>
                    </div>
                </div>
            </ScrollArea>
        </DialogContent>
    )
}