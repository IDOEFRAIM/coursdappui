'use client';
import { useState } from 'react';
import {
  Table,
  TableHead,
  TableHeadCell,
  TableBody,
  TableRow,
  TableCell,
  Pagination,
} from 'flowbite-react';

const ShowStudents = () => {
  const students = [
    { matricule: 434, eleve: 'Bob Hubert', classe: '2nde C' },
    { matricule: 235, eleve: 'Hien Audrey', classe: '5ème' },
    { matricule: 256, eleve: 'Sawadogo Gaius', classe: '2nde A' },
    { matricule: 876, eleve: 'Ildevert Meda', classe: '1ère' },
    { matricule: 1354, eleve: 'Kabore Yves', classe: '6ème' },
    { matricule: 1346, eleve: 'Ange Sy', classe: '3ème' },
    { matricule: 4575, eleve: 'Did B', classe: '2nde C' },
    { matricule: 6784, eleve: 'Himra', classe: '5ème' },
    { matricule: 3465, eleve: 'Nazi Boni', classe: '2nde A' },
    { matricule: 656, eleve: 'Jean Pierre Meda', classe: '1ère' },
    { matricule: 3454, eleve: 'Mohamed Ben', classe: '6ème' },
    { matricule: 23545, eleve: 'John Doe', classe: '3ème' },
  ];

  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(students.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = students.slice(startIndex, startIndex + itemsPerPage);

  return (
    <div className="w-full overflow-x-auto bg-white rounded-lg shadow-md p-4">
      <Table hoverable striped>
        <TableHead>
          <TableRow>
            <TableHeadCell>Matricule</TableHeadCell>
            <TableHeadCell>Élève</TableHeadCell>
            <TableHeadCell>Classe</TableHeadCell>
          </TableRow>
        </TableHead>
        <TableBody className="divide-y">
          {currentItems.map(({ matricule, eleve, classe }, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium text-gray-900">{matricule}</TableCell>
              <TableCell>{eleve}</TableCell>
              <TableCell>{classe}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className="mt-6 flex justify-center">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
          showIcons
        />
      </div>
    </div>
  );
};

export default ShowStudents;