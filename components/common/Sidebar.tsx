'use client';
import { useAuth } from '@/contexts/AuthContext';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const router = useRouter();

  const handleLogout = async () => {
    await logout();
    router.push('/auth/login');
  };

  if (!user) return null;

  const links = {
    SystemAdmin: [
      { href: '/systemAdmin/hospitals', label: 'Hospitals' },
      { href: '/systemAdmin/hospitalAdmins', label: 'Hospital Admins' },
    ],
    HospitalAdmin: [
      { href: '/hospitalAdmin/hospitalProfile', label: 'Hospital Profile' },
      { href: '/hospitalAdmin/doctors', label: 'Doctors' },
      { href: '/hospitalAdmin/receptionists', label: 'Receptionists' },
    ],
    Doctor: [
      { href: '/doctor/medicalRecords', label: 'Medical Records' },
      { href: '/doctor/appointments', label: 'Appointments' },
      { href: '/doctor/schedules', label: 'Schedules' },
    ],
    Receptionist: [
      { href: '/receptionist/appointments', label: 'Appointments' },
      { href: '/receptionist/schedule', label: 'Schedule' },
      { href: '/receptionist/emergencies', label: 'Emergencies' },
    ],
  };

  const roleLinks = links[user.role] || [];

  return (
    <div className="w-64 bg-gray-800 text-white h-screen p-4">
      <h2 className="text-xl font-bold mb-6">Hospital Management</h2>
      <nav>
        <ul className="space-y-2">
          {roleLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className="block p-2 hover:bg-gray-700 rounded">
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        onClick={handleLogout}
        className="mt-4 w-full bg-red-500 text-white p-2 rounded hover:bg-red-600"
      >
        Logout
      </button>
    </div>
  );
}