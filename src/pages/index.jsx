import Head from 'next/head';
import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Pricing } from '@/components/Pricing';
import { PrimaryFeatures } from '@/components/PrimaryFeatures';
import { FAQs } from '@/components/FAQs';

export default function Home() {
    return (
    <>
      <Head>
        <title>OmegaFyt - Achieve Your Dream Body | Smart Fitness Tracking</title>
        <meta
          name="description"
          content="Transform your fitness journey with OmegaFyt. AI-powered workouts that adapt to your progress + effortless meal tracking. Start free today and reach your goals faster than ever."
        />
      </Head>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <Pricing />
        <FAQs />
      </main>
      <Footer />
    </>
  );
}
