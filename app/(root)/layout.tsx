import CTAPage from "@/components/shared/CTA/CTAPage";
import FooterPage from "@/components/shared/Footer/FooterPage";
import Header from "@/components/shared/Header/Header";
import Hero from "@/components/shared/Hero/Hero";
import TrustedBy from "@/components/shared/TrustedBy/TrustedBy";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header />
      <Hero />
      <main>{children}</main>
      <CTAPage />
      <TrustedBy />
      <FooterPage />
    </div>
  );
}
