import React, {useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setCompanies, removeCompany } from './CompaniesSlice';
import { companiesData } from '../shared/companies';
import { setCompanies, removeCompany } from './CompaniesSlice';
import { companiesData } from '../../shared/Shared';  // Adjust the path based on actual file name

function CompaniesList() {
    const companies = useSelector(state => state.companies);
    const dispatch= useDispatch();
    useEffect(() => {
    dispatch(setCompanies (companiesData)); 
    }, [dispatch]);
    return (
        <div>
            <h1>Companies</h1>
            <ul>
                {companies.map(company => (
                    <li key={company.id}>
                        {company.name} {company.category}
                        <button onClick={() => dispatch(removeCompany (company.id))}>
                         Remove
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default CompaniesList;