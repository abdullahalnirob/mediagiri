import Navbar from '@/components/Navbar';
import Sidebar from '@/components/SideBar';

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Sidebar />
      <Navbar />
      <div className="pl-60 pt-[40px]">{children}</div>
    </>
  );
}
