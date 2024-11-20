import {Button} from "@/components/ui/button";
import {DialogContent, DialogDescription, DialogHeader, DialogTitle} from "@/components/ui/dialog";
import {Globe, FileText, Users, Zap} from "lucide-react";
import {ScrollArea} from "@/components/ui/scroll-area";


export default function WebsiteEPK() {
    
    return (
        <DialogContent className="sm:max-w-[800px] max-h-[90vh] overflow-hidden bg-gray-900 text-gray-100">
            <DialogHeader>
                <DialogTitle className="text-2xl font-bold text-gray-100">Website & EPK Services for Musicians</DialogTitle>
                <DialogDescription className="text-gray-400">
                    Build a home base for your music career
                </DialogDescription>
            </DialogHeader>
            <ScrollArea className="mt-4 h-[calc(90vh-100px)] w-full rounded-md border border-gray-700 p-6 bg-gray-800">
                <div className="space-y-6 max-w-3xl mx-auto">
                    <h2 className="text-3xl font-bold text-center mb-6 text-blue-400">Build a Home Base for Your Music Career</h2>

                    <p className="text-lg text-gray-300">
                        In the digital age, your website and electronic press kit (EPK) are essential tools for success. They serve as your professional hub, showcasing everything from your music and bio to press coverage and booking information. We&#39;ll design a modern, user-friendly website and a compelling EPK that reflect your artistry.
                    </p>

                    <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-100">Our services include:</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <Globe className="mr-2" />
                                Custom Website Design
                            </h4>
                            <p className="text-gray-300">We&#39;ll build a site that&#39;s visually stunning, easy to navigate, and optimized for SEO, ensuring fans and industry professionals can find you.</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <FileText className="mr-2" />
                                Electronic Press Kit (EPK)
                            </h4>
                            <p className="text-gray-300">A professional EPK is your key to securing gigs, press coverage, and industry attention. We&#39;ll include your bio, music samples, press photos, and contact info in a sleek, shareable format.</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <Users className="mr-2" />
                                Fan Engagement Tools
                            </h4>
                            <p className="text-gray-300">Integrate mailing lists, social links, and exclusive content to keep fans engaged and coming back.</p>
                        </div>

                        <div className="bg-gray-700 p-4 rounded-lg">
                            <h4 className="text-xl font-semibold mb-2 flex items-center text-blue-300">
                                <Zap className="mr-2" />
                                SEO Optimization
                            </h4>
                            <p className="text-gray-300">We&#39;ll ensure your website is fully optimized for search engines, helping you reach more fans and industry professionals organically.</p>
                        </div>
                    </div>

                    <div className="mt-8 bg-blue-900 p-6 rounded-lg">
                        <h3 className="text-2xl font-semibold mb-4 text-blue-300">Why It Matters</h3>
                        <p className="text-lg text-gray-300">
                            A great website and EPK elevate your professionalism, making it easier to book gigs, get press, and grow your career.
                        </p>
                    </div>

                    <div className="mt-8">
                        <h3 className="text-2xl font-semibold mb-4 text-gray-100">Ready to Build Your Digital Home?</h3>
                        <p className="text-lg mb-4 text-gray-300">
                            Let&#39;s create a stunning website and professional EPK that showcase your talent and help you connect with fans and industry professionals. Our team of web experts is ready to bring your vision to life.
                        </p>
                        <Button size="lg" className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white">Get Started</Button>
                    </div>

                    <div className="mt-8 text-sm text-gray-400">
                        <h4 className="font-semibold mb-2">SEO Keywords:</h4>
                        <p>website design for musicians, electronic press kit for artists, EPK services for musicians, music career website, professional musician websites</p>
                    </div>
                </div>
            </ScrollArea>
        </DialogContent>
    )
}