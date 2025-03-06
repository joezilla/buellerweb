import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import { notFound } from 'next/navigation'
import type { Metadata } from "next"
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { getPage, getAllPages } from '@/lib/contentful'

type PageParams = {
  params: Promise<{
    slug: string
  }>
}

// Generate metadata for each page
export async function generateMetadata({ params }: PageParams): Promise<Metadata> {
    const slug = (await params).slug;
    const page = await getPage(slug)
    if (!page) return {}

    return {
        title: `${page.fields.title} | Bueller Agency`,
        description: `${page.fields.description}`, // You might want to extract this from the body
    }
}
// Generate static pages for all slugs
export async function generateStaticParams() {
    const pages = await getAllPages()
    return pages.map((page) => ({
        slug: page.fields.slug,
    }))
}


export default async function ContentfulPage({ params }: PageParams) {
    const slug = (await params).slug;
    const page = await getPage(slug)

    if (!page) {
        notFound()
    }
    const { title, body, heroImage } = await page.fields
    return (

        <div className="min-h-screen flex flex-col">
            {/* Dark header section */}
            <div className="bg-black">
                <Navbar />
            </div>

            {heroImage && (
                <div className="relative w-full h-[300px] md:h-[400px]">
                    <Image
                        src={`https:${heroImage.fields.file.url}`}
                        alt={heroImage.fields.title}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-white">{title}</h1>
                    </div>
                </div>
            )}

            {/* Main content */}
            <main className="flex-grow bg-white">
                <div className="container mx-auto px-6 py-16">
                    <div className="max-w-3xl mx-auto">
                        {!heroImage && <h1 className="text-4xl md:text-5xl font-bold text-black mb-8">{title}</h1>}
                        <div className="prose prose-lg max-w-none">
                            {documentToReactComponents(body)}
                        </div>
                    </div>
                </div>
            </main>


            {/* Footer */}
            <Footer />
        </div>
    )
}

