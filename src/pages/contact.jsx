import Head from 'next/head';
import React from 'react';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import Contact from "@/components/Contact";

export default function ContactPage() {
    return (
        <>
            <Head>
                <title>OmegaFyt - Contact Us | Get Support & Share Feedback</title>
                <meta
                    name="description"
                    content="Need help with OmegaFyt? Contact our support team for quick assistance with your fitness journey. We respond within 24 hours and love hearing your feedback!"
                />
            </Head>
            <Header />
            <main className="w-full flex justify-center">
                <div className="container">
                <Contact />
                </div>
            </main>
            <Footer />
        </>
    );
}
