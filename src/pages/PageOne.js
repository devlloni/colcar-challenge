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
        // setShowResults(!showResults);
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
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <i className="material-icons prefix">search</i>
                                <input
                                    id="icon_prefix"
                                    type="text"
                                    className="validate"
                                    value={searchText}
                                    onChange={(e) => onChangeTextSearch(e.target.value)}
                                />
                                <label
                                    htmlFor="icon_prefix"
                                >
                                    Buscar...
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