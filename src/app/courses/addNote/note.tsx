'use client';
import { TextInput, Textarea, Button, HelperText } from 'flowbite-react';
import { useState } from 'react';

type NotesProps = {
  data: {
    notes: { matricule: string; note: string; appreciation: string }[];
  };
  updateData: (newData: Partial<{ notes: NotesProps['data']['notes'] }>) => void;
  onBack: () => void;
  onSubmit: () => void;
};

const Notes = ({ data, updateData, onBack, onSubmit }: NotesProps) => {
  const colors = ['gray-400', 'sky-400', 'violet-500', 'yellow-400', 'green-400', 'orange-400'];
  const [errors, setErrors] = useState<boolean[]>(Array(data.notes.length).fill(false));

  const handleChange = (
    index: number,
    field: 'matricule' | 'note' | 'appreciation',
    value: string
  ) => {
    const updated = [...data.notes];
    updated[index] = { ...updated[index], [field]: value };

    // Validate note field
    if (field === 'note') {
      const isValid = value === '' || !isNaN(Number(value));
      const updatedErrors = [...errors];
      updatedErrors[index] = !isValid;
      setErrors(updatedErrors);
    }

    updateData({ notes: updated });
  };

  return (
    <div className="flex flex-col items-center m-8 w-full">
      <h2 className="text-2xl font-semibold text-sky-600 mb-6">Notes des élèves</h2>

      {colors.map((color, index) => (
        <div
          key={index}
          className={`grid grid-cols-[120px_1fr] gap-4 m-2 p-4 border-l-4 border-l-${color} bg-white rounded-lg shadow-sm w-full max-w-4xl`}
        >
          {/* Matricule */}
          <div className="flex items-center justify-center">
            <TextInput
              placeholder="Matricule / ID"
              value={data.notes[index]?.matricule || ''}
              onChange={(e) => handleChange(index, 'matricule', e.target.value)}
              className="h-20 text-center font-semibold"
            />
          </div>

          {/* Note + Appreciation */}
          <div className="grid gap-4">
            <div>
              <TextInput
                placeholder="Note"
                type="number"
                value={data.notes[index]?.note || ''}
                onChange={(e) => handleChange(index, 'note', e.target.value)}
                color={errors[index] ? 'failure' : undefined}
              />
              {errors[index] && (
                <HelperText color="failure">The note must be a valid number</HelperText>
              )}
            </div>
            <Textarea
              placeholder="Appréciation"
              rows={3}
              value={data.notes[index]?.appreciation || ''}
              onChange={(e) => handleChange(index, 'appreciation', e.target.value)}
            />
          </div>
        </div>
      ))}

      <div className="grid gap-4 sm:grid-cols-2 mt-8">
        <Button
          onClick={onBack}
          className="bg-white-600 border border-gray-950 text-gray-600 px-6 py-3 text-lg rounded-lg"
        >
          Back
        </Button>

        <Button
          onClick={onSubmit}
          className="bg-sky-400 text-white-100 px-6 py-3 text-lg rounded-lg"
          disabled={errors.some((err) => err)}
        >
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Notes;