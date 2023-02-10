import React from 'react'

type HeaderOwnProps = {
    menuItems: []
}

const Header: React.FC<HeaderOwnProps> = () => {
    return (
        <header className="navbar bg-base-100 justify-evenly">
            <div className="">
                <a className="btn btn-ghost normal-case text-xl">Creative Pay</a>
            </div>
            <div className="">
                <ul className="menu menu-horizontal px-1">
                    <li tabIndex={0}>
                        <a>
                            View Employee Statistics
                            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" /></svg>
                        </a>
                        <ul className="p-2 bg-base-100">
                            <li><a>Christine Example</a></li>
                            <li><a>Karen Example</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </header>
    )
}

export default Header