import React from 'react';

const NavBar = () => {
    return(
        <nav>
        <div class="nav-wrapper">
          <a href="#!" class="brand-logo"><img src="https://cogranna.cogran.com/downloads/logo.png" alt="" /></a>
          <ul class="right hide-on-med-and-down">
            <li><a href="badges.html"><i class="material-icons right">view_module</i>Favoritos</a></li>
            <li><a href="badges.html"><i class="material-icons right">perm_identity</i>Registrarse</a></li>
            <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Ingresar</a>
          </ul>
    
        </div>
      </nav>
    );
};

export default NavBar;