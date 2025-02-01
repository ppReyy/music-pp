import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { useState } from 'react'

export default function Home() {
  const [audio] = useState(typeof Audio !== "undefined" ? new Audio("/audio.mp3") : null);

  const playAudio = () => {
    if (audio) {
      audio.play();
    }
  };

  return (
    <div className="container">
      <Head>
        <title>Next.js MP3 Player</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Click the button to play audio.
        </p>
        <button onClick={playAudio}>Play Audio</button>
        <audio controls>
          <source src="/audio.mp3" type="audio/mp3" />
          Your browser does not support the audio element.
        </audio>
      </main>

      <Footer />
    </div>
  )
}
