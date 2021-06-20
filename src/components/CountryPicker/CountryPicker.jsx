import React from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'
import styles from './CountryPicker.module.css'
import { fetchCountires } from '../../api'
import { useEffect } from 'react'
import { useState } from 'react'

const CountryPicker = ({handleCountryChange}) => {

    const [ fetchedCountries, setFetchedCountries ] = useState([])

    useEffect(() => {
        const fetchAPI = async () => {
            setFetchedCountries(await fetchCountires())
        }

        fetchAPI()
    },[setFetchedCountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect defaultValue='' onChange={(e) => handleCountryChange(e.target.value) }>
                <option value=''>Global</option>
                {fetchedCountries.map((country, i) => <option key={i} value={country}>{country}</option>)}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker