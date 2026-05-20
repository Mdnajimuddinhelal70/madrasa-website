"use client";

import { Button } from "@/components/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Plus, Trash2 } from "lucide-react";
import { Controller, useFieldArray, type Control } from "react-hook-form";

interface DynamicArrayInputProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  name: string;
  label: string;
  placeholder?: string;
}

export function DynamicArrayInput({
  control,
  name,
  label,
  placeholder,
}: DynamicArrayInputProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <Field>
      <FieldLabel>{label}</FieldLabel>
      <FieldGroup className="space-y-2">
        {fields.map((f, index) => (
          <Controller
            key={f.id}
            control={control}
            name={`${name}.${index}`}
            render={({ field, fieldState }) => (
              <div className="flex gap-2">
                <div className="flex-1">
                  <Input
                    placeholder={placeholder}
                    aria-invalid={fieldState.invalid}
                    name={field.name}
                    ref={field.ref}
                    onBlur={field.onBlur}
                    onChange={field.onChange}
                    value={(field.value as string) ?? ""}
                  />
                  {fieldState.error && (
                    <FieldError errors={[fieldState.error]} />
                  )}
                </div>
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => remove(index)}
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>
            )}
          />
        ))}
      </FieldGroup>
      <Button
        type="button"
        variant="outline"
        size="sm"
        className="w-fit"
        onClick={() => append("")}
      >
        <Plus className="h-4 w-4 mr-1" /> Add {label}
      </Button>
    </Field>
  );
}
