import Image from "next/image";
import "./css/button.css";
export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>Hello! I,am Phatcharadanai Kanyapan</p>
      <Image
        alt="qr_code"
        src="/images/PCV.png"
        width={200}
        height={200}
      ></Image>
      <button className="glitch-button">
        <a href="https://drive.google.com/uc?export=download&id=1NSe2ljkxIFPCkPvw1ogfLwKHqEeL5hiS">
          DOWLOAD CV
        </a>
      </button>
    </main>
  );
}
