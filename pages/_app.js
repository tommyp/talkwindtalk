import 'typeface-inter';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="font-sans text-gray-600 bg-gray-100 w-screen h-screen">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
