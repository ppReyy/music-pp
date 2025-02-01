import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useEffect, useState } from 'react'

export default function Home() {
  const [audio, setAudio] = useState(null);

  useEffect(() => {
    if (typeof Audio !== "undefined") {
      const audioInstance = new Audio("/audio.mp3");
      audioInstance.loop = true; // Enable looping
      audioInstance.autoplay = true; // Enable autoplay
      audioInstance.play().catch((e) => console.log("Autoplay blocked:", e)); // Handle autoplay restrictions
      setAudio(audioInstance);
    }
  }, []);

  return (
    <div className="container">
      <Head>
        <title>Next.js MP3 Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Audio is playing in the background.
        </p>
        
        <audio src="/rosee.mp3" autoPlay loop controls />
      </main>

      <Footer />
    </div>
  )
}
