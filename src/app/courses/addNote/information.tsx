'use client';
import { Button, TextInput, Label, HelperText, Textarea, Select } from 'flowbite-react';
import { ArrowRightIcon } from 'flowbite-react';
import { BiEnvelope } from 'react-icons/bi';

type InformationsProps = {
  data: {
    corrector: string;
    description: string;
    devoir: string;
    classe: string;
    appreciation: string;
  };
  updateData: (newData: Partial<InformationsProps['data']>) => void;
  onNext: () => void;
};

const Informations = ({ data, updateData, onNext }: InformationsProps) => {
  const handleChange = (field: keyof typeof data, value: string) => {
    updateData({ [field]: value });
  };

  return (
    <div className="flex flex-col items-center bg-gray-50 rounded-2xl p-8 shadow-md w-full max-w-5xl mx-auto">
      <h2 className="text-3xl font-semibold text-sky-600 mb-8">Note Information</h2>

      <div className="grid gap-y-8 gap-x-6 md:grid-cols-2 w-full items-start">
        {/* Corrector Name */}
        <div>
          <Label htmlFor="corrector" className="mb-2 block text-base font-medium">
            Corrector Name
          </Label>
          <TextInput
            id="corrector"
            placeholder="Enter corrector's name"
            sizing="lg"
            className="rounded-lg shadow-sm text-base"
            value={data.corrector}
            onChange={(e) => handleChange('corrector', e.target.value)}
          />
          <HelperText className="invisible">Placeholder</HelperText>
        </div>

        {/* Description */}
        <div>
          <Label htmlFor="description" className="mb-2 block text-base font-medium">
            Description
          </Label>
          <TextInput
            id="description"
            placeholder="Short description"
            //icon={BiEnvelope}
            sizing="lg"
            className="rounded-lg shadow-sm text-base"
            value={data.description}
            onChange={(e) => handleChange('description', e.target.value)}
          />
          <HelperText className="invisible">Placeholder</HelperText>
        </div>

        {/* Homework description */}
        <div className="md:col-span-2">
          <Label htmlFor="devoir" className="mb-2 block text-base font-medium">
            Description du devoir
          </Label>
          <Textarea
            id="devoir"
            placeholder="Leave your description"
            color="failure"
            rows={5}
            className="rounded-lg shadow-sm text-base"
            value={data.devoir}
            onChange={(e) => handleChange('devoir', e.target.value)}
          />
          <HelperText className="invisible">Placeholder</HelperText>
        </div>

        {/* Classes */}
        <div>
          <Label htmlFor="classe" className="mb-2 block text-base font-medium">
            Classe
          </Label>
          <Select
            id="classe"
            required
                        sizing="lg"

            className="rounded-lg shadow-sm text-base"
            value={data.classe}
            onChange={(e) => handleChange('classe', e.target.value)}
          >
            <option value="">Select class</option>
            <option value="Tle">Tle</option>
            <option value="3eme">3ème</option>
          </Select>
          <HelperText className="invisible">Placeholder</HelperText>
        </div>

        {/* Overall appreciation */}
        <div>
          <Label htmlFor="appreciation" className="mb-2 block text-base font-medium">
            Appréciation générale
          </Label>
          <TextInput
            id="appreciation"
            addon="@"
            placeholder="e.g. Excellent"
            sizing="lg"
            className="rounded-lg shadow-sm text-base"
            value={data.appreciation}
            onChange={(e) => handleChange('appreciation', e.target.value)}
          />
          <HelperText className="invisible">Placeholder</HelperText>
        </div>
      </div>

      <div className="mt-10">
        <Button
          className="bg-sky-500 hover:bg-sky-600 text-white px-8 py-3 text-lg rounded-lg"
          onClick={onNext}
        >
          Suivant <ArrowRightIcon className="ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default Informations;