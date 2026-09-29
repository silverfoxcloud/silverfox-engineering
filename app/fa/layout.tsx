export default function PersianLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <script
        dangerouslySetInnerHTML={{
          __html:
            'document.documentElement.lang="fa";document.documentElement.dir="rtl";',
        }}
      />
      <div lang="fa" dir="rtl">{children}</div>
    </>
  );
}
