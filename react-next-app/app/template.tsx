//template
export default function Template({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="">
      全局template
      {children}
    </div>
  );
}
