'use client';
import { useState } from 'react';
import { TextInput, Label, Button, Select, HelperText } from 'flowbite-react';
import { useRouter } from 'next/navigation';

const AddStudent = () => {
  const router = useRouter();
  const [form, setForm] = useState({
    matricule: '',
    eleve: '',
    classe: '',
  });

  const [error, setError] = useState('');

  const handleChange = (field: keyof typeof form, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.matricule || !form.eleve || !form.classe) {
      setError('Tous les champs sont requis.');
      return;
    }

    // Simuler une soumission
    console.log('✅ Étudiant ajouté :', form);
    router.push('/students'); // Rediriger après soumission
  };

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-sky-600 mb-6">Add a student</h2>

      <form onSubmit={handleSubmit} className="grid gap-6">
        <div>
          <Label htmlFor="matricule">Matricule</Label>
          <TextInput
            id="matricule"
            placeholder="Ex: 12345"
            value={form.matricule}
            onChange={(e) => handleChange('matricule', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="eleve">Student Name</Label>
          <TextInput
            id="eleve"
            placeholder="Ex: Jean Dupont"
            value={form.eleve}
            onChange={(e) => handleChange('eleve', e.target.value)}
          />
        </div>

        <div>
          <Label htmlFor="classe">Classes</Label>
          <Select
            id="classe"
            value={form.classe}
            onChange={(e) => handleChange('classe', e.target.value)}
          >
            <option value="">Sélectionner une classe</option>
            <option value="6ème">6ème</option>
            <option value="5ème">5ème</option>
            <option value="4ème">4ème</option>
            <option value="3ème">3ème</option>
            <option value="2nde A">2nde A</option>
            <option value="2nde C">2nde C</option>
            <option value="1ère">1ère</option>
            <option value="Tle">Tle</option>
          </Select>
        </div>

        {error && <HelperText color="failure">{error}</HelperText>}

        <Button type="submit" className="bg-sky-500 text-white px-6 py-2 text-lg rounded-lg">
          Add
        </Button>
      </form>
    </div>
  );
};

export default AddStudent;