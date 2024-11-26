import { useState } from "react";
import companiesData from "../shared/companies";

const DemoRenderSimpleData = () => {
  const [companies, setCompanies] = useState(companiesData);

  return (
    <div>
      {
        companies.map((company) => (
          <div key={company.id}>
            <h1>{company.name}</h1>
            <h1>{company.id}</h1>
          </div>
        ))
      }
    </div>
  );
}

export default DemoRenderSimpleData;
