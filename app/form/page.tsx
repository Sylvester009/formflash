import FormPage from '../components/public-form/form';
import Header from '../components/public-form/header';

export default function PublicForm() {
  return (
    <main className="font-body-md text-body-md text-on-surface selection:bg-primary-container selection:text-on-primary-container">
      <Header />
      <FormPage />
    </main>
  );
}
