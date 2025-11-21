'use client';
import { Pagination, Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow, TextInput, Button } from 'flowbite-react';
import { useState } from 'react';
import { ArrowLeftIcon } from 'flowbite-react';
import Link from 'next/link';

const ShowStudents = () => {
    const students = [
        { matricule: 434, eleve: 'bob hubert', classe: '2nde C' },
        { matricule: 235, eleve: 'Hien Audrey', classe: '5 eme' },
        { matricule: 256, eleve: 'SAWADOGO GAIUS', classe: '2nd A' },
        { matricule: 876, eleve: 'Ildevert Meda', classe: '1ere' },
        { matricule: 1354, eleve: 'Kabore yves', classe: '6 eme' },
        { matricule: 1346, eleve: 'ANGE SY', classe: '3 eme' },
        { matricule: 4575, eleve: 'DID B', classe: '2nde C' },
        { matricule: 6784, eleve: 'HIMRA', classe: '5 eme' },
        { matricule: 3465, eleve: 'NAZI BONI', classe: '2nd A' },
        { matricule: 656, eleve: 'JEAN PIERRE MEDA', classe: '1ere' },
        { matricule: 3454, eleve: 'MOHAMED BEN', classe: '6 eme' },
        { matricule: 23545, eleve: 'JONH DOE', classe: '3 eme' },
    ];

    const itemsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = (page: number) => setCurrentPage(page);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = students.slice(startIndex, startIndex + itemsPerPage);

    return (
        <div className="p-6">
            <div className="flex items-center text-sky-500 mb-6">
                <Link href="/courses">
                    <ArrowLeftIcon />
                </Link>
                <span className="mx-2 text-lg">Courses</span>
            </div>

            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Liste des étudiants</h1>

            <div className="overflow-x-auto bg-white rounded-lg shadow-md p-4">
                <Table hoverable striped>
                    <TableHead>
                        <TableRow>
                            <TableHeadCell>Matricule</TableHeadCell>
                            <TableHeadCell>Élève</TableHeadCell>
                            <TableHeadCell>Classe</TableHeadCell>
                        </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                        {currentItems.map(({ matricule, eleve, classe }, i) => (
                            <TableRow key={i} className="bg-white dark:border-gray-700 dark:bg-gray-800">
                                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                    {matricule}
                                </TableCell>
                                <TableCell>{eleve}</TableCell>
                                <TableCell>{classe}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>

            <div className="mt-6 flex justify-center">
                <div className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 shadow-sm">
                    <Pagination
                        currentPage={currentPage}
                        totalPages={Math.ceil(students.length / itemsPerPage)}
                        onPageChange={onPageChange}
                        showIcons
                    />
                </div>
            </div>
        </div>
    );
};

export default ShowStudents;