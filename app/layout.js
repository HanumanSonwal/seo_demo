import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata = {
  title: {
    default: "Next.js SEO Demo",
    template: "%s | Next.js SEO Demo",
  },
  description: "Simple Next.js SEO demo project",
  robots: "index, follow",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main style={{ minHeight: "80vh", padding: 20 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
