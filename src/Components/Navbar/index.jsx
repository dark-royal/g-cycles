
const Navbar = () => {

    return(

        <>

            <div className= "flex flex-row justify-items-center ">
                <div className="text-green-600">
                    <h2 className="text-green-600">G-Cycle</h2>
                </div>


                <div className="flex flex-row ">
                    <p>Home</p>
                    <p>Locate</p>
                    <p>Blog</p>
                    <p>About us</p>
                </div>


                <div>

                    <div>
                        <button>SIGN IN</button>
                    </div>

                    <div>
                        <button>REGISTER</button>
                    </div>

                </div>

            </div>

        </>

    )
}
export default Navbar