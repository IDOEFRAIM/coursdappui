import { Metadata } from 'next';

type Props = {
  params: { tutorId: string };
};

export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
  const id = params.tutorId;
  return {
    title: `Tutor - ${id}`
  };
};

const Page = ({ params }: Props) => {
  const id = params.tutorId;

  return (
    <div>
      <h1 className="text-2xl font-semibold">Tutor {id}</h1>
    </div>
  );
};

export default Page;