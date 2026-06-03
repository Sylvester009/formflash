import FormDetails from '../components/dashboard/form-details';
import Header from '../components/dashboard/header';
import Sidebar from '../components/dashboard/sidebar';

export default function Dashboard() {
  return (
    <main className="font-body-md text-body-md overflow-hidden">
      <Header />
      <div className="flex pt-16 h-screen">
        <Sidebar />
        <FormDetails />
      </div>
    </main>
  );
}
