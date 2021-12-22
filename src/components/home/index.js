import React from 'react'
import Sidebar from '../common/sidebar'
import Gestionar from '../gestionar/gestionar'

const Home = () => {
    return (
        <React.Fragment>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-1">
                        <Sidebar/>
                    </div>
                    <div className="col-11">
                        <Gestionar/>
                    </div>
                </div>
            </div>            
        </React.Fragment>
    )
}

export default Home

