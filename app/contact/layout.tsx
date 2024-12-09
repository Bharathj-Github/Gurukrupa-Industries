import Footer from "@/components/Footer";
export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="">
        {children}
        <Footer></Footer>
    </section>
  );
}
