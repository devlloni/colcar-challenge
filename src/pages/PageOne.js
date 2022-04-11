import React, { useState } from 'react';

import LoginModal from '../components/loginModal';
import NavBar from '../components/navbar';
import ResultsTable from '../components/results';
import InfractionDate from '../helpers/enums/preloadData';

const PageOne = () => {

    const [showResults, setShowResults] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [preloadData, setPreloadData] = useState(InfractionDate);
    const [results, setResults] = useState(preloadData);

    const onSearch = () => {
        if(searchText.length < 1) return setResults(preloadData);
        const result = preloadData.filter(infraction => infraction.dni === Number(searchText));
        setResults(result);
    };

    const onChangeTextSearch = (text) => {
        setSearchText(text);
    };

    const sectionWhite = (
        <div className="section white">
            <div className="row container">
                <h2 className="header">Busqueda de infracciones</h2>
                <p className="grey-text text-darken-3 lighten-3">Tipee el número de DNI para filtrar por documento.</p>
                <div className="row">
                    <form className="col s12" onSubmit={onSearch}>
                        <div className="row">
                            {searchText.length > 8 ? (<span style={{ color: 'red', fontSize: '0.9em' }}>* Debe ingresar un DNI de 8 dígitos numéricos.</span>) : ''}
                            <div className="input-field col s12">
                                <i className="material-icons prefix" style={searchText.length > 8 ? {color: 'red'} : null}>search</i>
                                <input
                                    id="icon_prefix"
                                    type="number"
                                    className={ searchText.length > 8 ? 'validate invalid' : 'validate'}
                                    value={searchText}
                                    onChange={(e) => onChangeTextSearch(e.target.value)}
                                />
                                <label
                                    htmlFor="icon_prefix"
                                >
                                    {searchText.length > 8 ? '' : 'Buscar...'}
                                </label>
                            </div>
                        </div>
                        <a className="waves-effect waves-light btn-large" onClick={() => onSearch()}><i className="material-icons right">check</i>¡Buscar!</a>
                    </form>
                </div>
                <ResultsTable
                    results={results}
                    setResults={setResults}
                />
            </div>
        </div>
    );

    return (
        <div>
            <LoginModal />
            <div className="navbar-fixed">
                <NavBar />
            </div>
            {sectionWhite}
        </div>
    );
};
export default PageOne;