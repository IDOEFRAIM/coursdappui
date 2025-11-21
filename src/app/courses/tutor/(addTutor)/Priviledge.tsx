'use client';
import { Button, Label, Checkbox } from 'flowbite-react';

const Priviledge = ({
  data,
  updateData,
  onBack,
  onSubmit
}: {
  data: {
    privileges: string[];
  };
  updateData: (newData: Partial<typeof data>) => void;
  onBack: () => void;
  onSubmit: () => void;
}) => {
  const allPrivileges = [
    { label: 'Administrator (All privileges)', key: 'admin' },
    { label: 'Manage Courses', key: 'courses' },
    { label: 'Manage Students', key: 'students' },
    { label: 'Manage Tutors', key: 'tutors' },
    { label: 'View Reports', key: 'reports' },
    { label: 'Edit Profile', key: 'profile' },
    { label: 'Access Settings', key: 'settings' },
    { label: 'Moderate Content', key: 'moderation' },
    { label: 'Send Notifications', key: 'notifications' }
  ];

  const togglePrivilege = (key: string) => {
    const updated = data.privileges.includes(key)
      ? data.privileges.filter((p) => p !== key)
      : [...data.privileges, key];
    updateData({ privileges: updated });
  };

  return (
    <div className="bg-gray-50 rounded-2xl my-6 p-4">
      <span className="text-gray-400">Step 2/2</span>
      <h2 className="text-2xl my-4">Tutor Privileges</h2>

      <div className="grid md:grid-cols-2 gap-4">
        {allPrivileges.map(({ label, key }) => (
          <div key={key} className="flex items-center">
            <Checkbox
              id={key}
              checked={data.privileges.includes(key)}
              onChange={() => togglePrivilege(key)}
            />
            <Label htmlFor={key} className="ml-3">
              {label}
            </Label>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 my-8">
        <Button onClick={onBack} className="bg-white-600 border border-gray-950 text-gray-600">
          Back
        </Button>
        <Button onClick={onSubmit} className="bg-sky-400 text-white-100">
          Submit
        </Button>
      </div>
    </div>
  );
};

export default Priviledge;