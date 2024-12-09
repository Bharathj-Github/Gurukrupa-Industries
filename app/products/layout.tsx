import Footer from "@/components/Footer";

export default function ProductsLayout({
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
