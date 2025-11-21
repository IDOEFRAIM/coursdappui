'use client';

import Link from 'next/link';
import { useState } from 'react';
import { ArrowLeftIcon, Button, Progress } from 'flowbite-react';
import Informations from './information';
import Notes from './note';

const Page = () => {
    const [step, setStep] = useState(1);
    const steps = ['Informations', 'Notes'];

    const [noteData, setNoteData] = useState({
        corrector: '',
        description: '',
        devoir: '',
        classe: '',
        appreciation: '',
        notes: Array(6).fill({ matricule: '', note: '', appreciation: '' })
    });

    const updateNoteData = (newData: Partial<typeof noteData>) => {
        setNoteData((prev) => ({ ...prev, ...newData }));
    };

    const handleFinalSubmit = () => {
        console.log('✅ Final note data:', noteData);
        //we will add here axios.post('/api/notes', noteData)
    };

    return (
        <div className="flex flex-col px-6 py-4">
            <h2 className="flex items-center text-sky-400 mb-4">
                <Link href="/courses">
                    <ArrowLeftIcon />
                </Link>
                <span className="mx-2">Courses</span>
            </h2>

            <h1 className="text-3xl font-semibold mb-2">Create a new note - Step {step}/{steps.length}</h1>
            <Progress progress={(step / steps.length) * 100} className="mb-6" />

            <div className="grid grid-cols-2 gap-4 mb-6">
                <Button
                    onClick={() => setStep(1)}
                    className={`px-6 py-3 text-lg rounded-lg font-semibold ${step === 1 ? 'bg-sky-400 text-white' : 'bg-white text-gray-600'
                        }`}
                >
                    Informations
                </Button>
                <Button
                    onClick={() => setStep(2)}
                    className={`px-6 py-3 text-lg rounded-lg font-semibold ${step === 2 ? 'bg-sky-400 text-white' : 'bg-white text-gray-600'
                        }`}
                >
                    Notes
                </Button>
            </div>

            {step === 1 ? (
                <Informations
                    data={noteData}
                    updateData={updateNoteData}
                    onNext={() => setStep(2)}
                />
            ) : (
                <Notes
                    data={noteData}
                    updateData={updateNoteData}
                    onBack={() => setStep(1)}
                    onSubmit={handleFinalSubmit}
                />
            )}
        </div>
    );
};

export default Page;