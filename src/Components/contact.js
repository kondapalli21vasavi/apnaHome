import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

function Contact(props){
    const [ver,setVer]=useState(false);
    useEffect(()=>{
        if(props.id.length!==0){
            setVer(true);
        }
    },[props])
    return(
        <div>
            {console.log(props.id)}
            <div className="container-fluid">
                <div className="row Header">
                    <div className="col mt-3">
                        <p>Find your dream Home with ApnaHome</p>
                    </div>
                </div>
                <div className="container">
                    <nav className="navbar navbar-expand-lg">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="/"><b>ApnaHome</b></a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        {ver?(<>
                                            <Link to='/Dashboard' className='Link text-dark mx-3'>Dashboard</Link>
                                        </>):(<>
                                            
                                        </>)}
                                        {/* <Link to='/Dashboard' className='Link text-dark mx-3'>Dashboard</Link> */}
                                    </li>
                                    <li className="nav-item">
                                        <Link to="/main" className='Link text-dark mx-3'>Listings</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link to='/contact' className='Link text-dark mx-3'>Contact</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
            <div className='text-center'>
                <p>Name: Team 262</p>
                <p>Team Member 1: Balaji</p>
                <p>Team Member 2: Guru SaiNath</p>
                <p>Team Member 3: Devesh</p>
                <p>Team Member 4: Vasavi</p>
                <p>Team Member 5: Rokya</p>
            </div>
        </div>
    )
}

export default Contact;
