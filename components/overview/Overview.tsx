import SalesOverview from "./SalesOverview";
import PropertyOverview from "./PropertyOverview";
import CustomersOverview from "./CustomersOverview.tsx";

export default function Overview() {
  return (
    <div className="flex flex-col items-center lg:flex-row gap-8 mt-8">
      <SalesOverview />
      <div>
        <PropertyOverview />
        <CustomersOverview />
      </div>
    </div>
  );
}
