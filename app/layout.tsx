import { AuthProvider } from '@/contexts/AuthContext';
import '@/styles/globals.css';

export const metadata = {
  title: 'Hospital Management System',
  description: 'A system for managing hospital operations',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-100">
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}