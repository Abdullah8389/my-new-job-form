// src/components/Step2.tsx
import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';

const schema = z.object({
  description: z.string().nonempty("Description is required"),
  skills: z.string().nonempty("Skills are required"),
});

type FormData = z.infer<typeof schema>;

const Step2: React.FC<{ onSubmit: (data: FormData) => void }> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data: FormData) => {
    onSubmit(data);
  };

  return (
    <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
      <div>
        <label className="block">Job Description</label>
        <Controller
          name="description"
          control={control}
          render={({ field }) => <textarea {...field} className="input" />}
        />
        {errors.description && <p className="text-red-500">{errors.description.message}</p>}
      </div>
      <div>
        <label className="block">Skills Required</label>
        <Controller
          name="skills"
          control={control}
          render={({ field }) => <textarea {...field} className="input" />}
        />
        {errors.skills && <p className="text-red-500">{errors.skills.message}</p>}
      </div>
      <button type="submit" className="btn">Submit</button>
    </form>
  );
};

export default Step2;
