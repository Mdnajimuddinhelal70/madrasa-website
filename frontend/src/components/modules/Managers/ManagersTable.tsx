"use client";

import { Eye, Pencil, Trash2 } from "lucide-react";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { IManager } from "@/types/manager.interface";

interface ManagerTableProps {
  managers: IManager[];
  onDetails?: (manager: IManager) => void;
  onEdit?: (manager: IManager) => void;
  onDelete?: (manager: IManager) => void;
}

export const ManagerTable = ({
  managers,
  onDetails,
  onEdit,
  onDelete,
}: ManagerTableProps) => {
  return (
    <div className="w-full overflow-hidden rounded-lg border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-16">S Number</TableHead>

            <TableHead>Manager</TableHead>

            <TableHead>Phone</TableHead>

            <TableHead className="hidden lg:table-cell">Description</TableHead>

            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {managers.length > 0 ? (
            managers.map((manager, index) => (
              <TableRow key={manager._id}>
                {/* Serial */}
                <TableCell className="font-medium">{index + 1}</TableCell>

                {/* Manager */}
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={manager.picture || ""}
                        alt={manager.name}
                      />

                      <AvatarFallback>
                        {manager.name?.charAt(0).toUpperCase()}
                      </AvatarFallback>
                    </Avatar>

                    <div className="min-w-0">
                      <p className="truncate font-medium">{manager.name}</p>

                      <p className="text-muted-foreground text-xs">Manager</p>
                    </div>
                  </div>
                </TableCell>

                {/* Phone */}
                <TableCell>
                  {manager.phone || (
                    <span className="text-muted-foreground">N/A</span>
                  )}
                </TableCell>

                {/* Description */}
                <TableCell className="hidden max-w-sm lg:table-cell">
                  {manager.description ? (
                    <p className="truncate">{manager.description}</p>
                  ) : (
                    <span className="text-muted-foreground">
                      No description
                    </span>
                  )}
                </TableCell>

                {/* Actions */}
                <TableCell>
                  <div className="flex justify-end gap-1">
                    {/* Details */}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      title="View Details"
                      onClick={() => onDetails?.(manager)}
                    >
                      <Eye className="h-4 w-4" />
                    </Button>

                    {/* Edit */}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      title="Edit Manager"
                      onClick={() => onEdit?.(manager)}
                    >
                      <Pencil className="h-4 w-4" />
                    </Button>

                    {/* Delete */}
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      title="Delete Manager"
                      className="text-destructive hover:text-destructive"
                      onClick={() => onDelete?.(manager)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                <p className="text-muted-foreground">No managers found.</p>
              </TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </div>
  );
};
