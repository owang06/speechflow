import Image from "next/image";
import MicrophoneButton from "../components/MicrophoneButton";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 sm:items-start">
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to SpeechFlow - Your Voice Recording App
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            Start recording your voice by clicking the microphone button below. 
            Perfect for voice notes, interviews, or any audio recording needs.
          </p>
        </div>
        <div className="flex flex-col items-center gap-8">
          <MicrophoneButton />
        </div>
      </main>
    </div>
  );
}
