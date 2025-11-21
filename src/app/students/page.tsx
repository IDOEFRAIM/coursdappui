'use client';
import Link from 'next/link';
import { Button } from 'flowbite-react';
import { MdAddIcCall } from 'react-icons/md';
import ShowStudents from './showStudents';
import Image from 'next/image';

const Page = () => {
    const hasStudent = true;

    return (
        <div className="m-6">
            {/* Header */}
            <div className="border border-gray-300 rounded-lg px-4 py-2 mb-6 flex items-center gap-6">
                <span className="border-b-2 border-sky-500 text-sky-600 font-semibold">Students</span>
                <span className="text-gray-400">Group Tags</span>
            </div>

            {/* Add Button */}
            <div className="flex justify-end mb-4">
                <Link href="/students/addStudent">
                    <Button size="md" className="bg-sky-500 text-white flex items-center gap-2">
                        <MdAddIcCall className="text-lg" />
                        Add New
                    </Button>
                </Link>
            </div>

            {/* Content */}
            <div className="my-4">
                {hasStudent ? (
                    <ShowStudents />
                ) : (
                    <div className="flex flex-col items-center justify-center my-12 text-center">
                        <Image width={300} height={300} alt="student picture" src="/next.svg" />
                        <h2>You don&apos;t have any students yet</h2>
                        <p className="text-gray-500 mb-6">
                            Add your students so you can take their attendance, assign notes, and more.
                        </p>
                        <Link href="/students/addStudent">
                            <Button size="md" className="bg-sky-500 text-white flex items-center gap-2">
                                <MdAddIcCall className="text-lg" />
                                Add New
                            </Button>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Page;