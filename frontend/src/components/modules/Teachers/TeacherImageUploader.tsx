"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface Props {
  files: File[];
  onChange: (files: File[]) => void;
  max?: number;
}

export const TeacherImageUploader = ({ files, onChange, max = 5 }: Props) => {
  const [previews, setPreviews] = useState<string[]>([]);

  const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
    const incoming = Array.from(e.target.files ?? []);
    const merged = [...files, ...incoming].slice(0, max);
    onChange(merged);
    setPreviews(merged.map((f) => URL.createObjectURL(f)));
  };

  const removeAt = (idx: number) => {
    const next = files.filter((_, i) => i !== idx);
    onChange(next);
    setPreviews(next.map((f) => URL.createObjectURL(f)));
  };

  return (
    <div className="space-y-3">
      <Label>Pictures (max {max})</Label>
      <Input
        type="file"
        accept="image/*"
        multiple
        onChange={handleFiles}
        className="cursor-pointer"
      />
      {previews.length > 0 && (
        <div className="grid grid-cols-3 md:grid-cols-5 gap-3">
          {previews.map((src, i) => (
            <div
              key={i}
              className="relative aspect-square rounded-lg overflow-hidden border"
            >
              <Image src={src} alt="" fill className="object-cover" />
              <button
                type="button"
                onClick={() => removeAt(i)}
                className="absolute top-1 right-1 bg-black/60 text-white rounded-full p-1 hover:bg-black"
              >
                <X className="h-3 w-3" />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
