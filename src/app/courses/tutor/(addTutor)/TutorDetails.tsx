'use client';
import { Button, Label, TextInput, HelperText, Textarea } from 'flowbite-react';
import { useRef, useState } from 'react';

const TutorDetails = ({
  data,
  updateData,
  onNext
}: {
  data: {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    subject: string;
  };
  updateData: (newData: Partial<typeof data>) => void;
  onNext: () => void;
}) => {
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitting, setSubmitting] = useState(false);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  const sanitizeInput = (value: string) => {
    const div = document.createElement('div');
    div.textContent = value;
    return div.innerHTML;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      updateData({ [name]: sanitizedValue });

      if (name === 'email') {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        setErrors((prev) => ({
          ...prev,
          email: emailRegex.test(sanitizedValue) ? '' : 'Invalid email format'
        }));
      }
    }, 100);
  };

  const validateForm = () => {
    const newErrors: { [key: string]: string } = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!data.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!data.email.trim()) newErrors.email = 'Email is required';
    else if (!emailRegex.test(data.email)) newErrors.email = 'Invalid email format';
    if (!data.phone.trim()) newErrors.phone = 'Phone number is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validateForm()) {
      console.error('Validation failed');
      return;
    }

    onNext();
  };

  const fields = [
    { name: 'fullName', label: 'Full Name', type: 'text', placeholder: 'Enter your full name' },
    { name: 'email', label: 'Email Address', type: 'email', placeholder: 'Enter email address' },
    { name: 'phone', label: 'Phone Number', type: 'tel', placeholder: 'Enter phone number' },
    { name: 'address', label: 'Address', type: 'textarea', placeholder: 'Enter address' },
    { name: 'subject', label: 'Subject', type: 'textarea', placeholder: 'Enter subject' }
  ];

  return (
    <div className="bg-gray-50 rounded-2xl my-6 p-4">
      <span className="text-gray-400">Step 1/2</span>
      <h2 className="text-2xl">Tutor Details</h2>
      <div className="grid lg:grid-cols-2 gap-4">
        {fields.map(({ name, label, type, placeholder }) => (
          <div key={name} className="w-full">
            <Label htmlFor={name} className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
              {label}
            </Label>
            {type === 'textarea' ? (
              <Textarea
                id={name}
                name={name}
                placeholder={placeholder}
                defaultValue={data[name as keyof typeof data]}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
            ) : (
              <TextInput
                id={name}
                name={name}
                type={type}
                placeholder={placeholder}
                defaultValue={data[name as keyof typeof data]}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 bg-white p-3 text-sm text-gray-900 shadow-sm focus:border-sky-500 focus:ring-sky-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400"
              />
            )}
            <HelperText className="mt-1 text-xs text-red-500 dark:text-gray-400">
              {errors[name] || ' '}
            </HelperText>
          </div>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 my-8">
        <Button
          onClick={() => console.log('Current data:', data)}
          className="bg-white-600 border-1 border-gray-950 text-gray-600"
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          disabled={submitting}
          className="bg-sky-400 text-white-100"
        >
          {submitting ? 'Submitting...' : 'Next'}
        </Button>
      </div>
    </div>
  );
};

export default TutorDetails;