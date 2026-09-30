import { ManagerTable } from "@/components/modules/Managers/ManagersTable";
import { getAllManagers } from "@/services/manager/getAllManagers";

const ManagersPage = async () => {
  const response = await getAllManagers();

  console.log("Managers API Response:", response);

  const managers = response.data || [];

  console.log("Managers:", managers);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold">Managers</h1>
        <p className="text-muted-foreground">
          Manage all madrasa managers from here.
        </p>
      </div>

      <ManagerTable managers={managers} />
    </div>
  );
};

export default ManagersPage;
