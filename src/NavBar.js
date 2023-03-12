import React from 'react'

const NavBar = ({accounts, setAccounts}) => {
    const isConnected = Boolean(accounts[0]);

    async function connectAccount() {
        if (window.ethereum) {
            const accounts = await window.ethereum.request({
                method: "eth_requestAccounts",
            });
            setAccounts(accounts);
        }
    }

    return (
        <div>
            {/* Left side Social Media Icons */}
            <div>Faceebook</div>
            <div>Twitter</div>
        </div>
  )
}

export default NavBar