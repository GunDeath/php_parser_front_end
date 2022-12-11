import React, {useEffect} from 'react'
import {baseUrl} from "./api";
import axios from "axios";
import {useActions} from "./store/hooks/useActions";
import {useTypedSelector} from "./store/hooks/useTypedSelector";

function App() {
    const {company} = useTypedSelector(state => state)
    const {companyAddItem, updateCompany} = useActions()


    const addNewCompany = async () => {
        await axios.post(baseUrl + `/companies/company/add`, { name: 'Axis17465'})
            .then((response) => {
                console.log(response.data)
                 companyAddItem({...response.data, is_activated: true})
            })
    }

    const updateSingleCompany = async () => {
        await axios.put(baseUrl + `/companies/company/update/1`, { name: 'Axis6', is_activated: false})
            .then((response) => {
                updateCompany(response.data)
            })
    }


    useEffect(() => {
        axios.get(baseUrl + '/companies')
            .then((response) => {
                if (response.status === 200) {
                    companyAddItem(response.data)
                    console.log(response.data)
                }
            })
    }, [])

    useEffect(() => {
        console.log(company)
        localStorage.setItem('companies', JSON.stringify(company))
    }, [company])

    return (
        <div className="App">
                <button onClick={() => updateSingleCompany()}>Update</button>
                <button onClick={() => addNewCompany()}>Add</button>
        </div>
    );
}

export default App;
