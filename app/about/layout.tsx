export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-[100%] w-[100vw]">
        {children}
    </div>
  );
}
