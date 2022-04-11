import React from 'react';

const LoginModal = () => {
    return (
        <div>
            <div id="modal1" class="modal">
                <div class="modal-content">
                    <a href="#!" class="modal-action modal-close waves-effect waves-green btn-flat right">X</a>
                    <h4>Ingresar</h4>
                    <div class="row">
                        <form class="col s12">
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">account_circle</i>
                                    <input id="icon_prefix" type="text" class="validate" />
                                    <label for="icon_prefix">User Name</label>
                                </div>
                            </div>
                            <div class="row">
                                <div class="input-field col s12">
                                    <i class="material-icons prefix">lock_open</i>
                                    <input id="password" type="password" class="validate" />
                                    <label for="password">Password</label>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="modal-footer">
                    <a href="#!" class=" modal-action modal-close waves-effect waves-green btn">Confirm</a>
                    <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">Forgot Password/Username?</a>
                    <a href="#!" class=" modal-action modal-close waves-effect waves-green btn-flat">New User?</a>
                </div>
            </div>
        </div>
    );
}
export default LoginModal;