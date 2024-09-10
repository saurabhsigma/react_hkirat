import React from "react"

const Header = () =>{
    return(
        <>
            <div className="header h-12 bg-green-500 items-center flex justify-between ">
                <h2>logo</h2>
                <div className="flex justify-around items-center gap-5 mr-10">
                    <h4>About</h4>
                    <h4>Career</h4>
                    <h4>Blog</h4>
                    <h4>Account</h4>
                </div>
                
            </div>
        </>
    )
}

export default Header;