import 'typeface-inter';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <main className="font-sans text-gray-800">
        <Component {...pageProps} />
      </main>
    </>
  );
}

export default MyApp;
