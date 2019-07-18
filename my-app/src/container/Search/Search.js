import React from "react";
import './Search.css'




import { connect } from 'react-redux';
import { fetchPlanetsService, fetchPlanetDataService } from "../../services/starwarsService";
 
 
class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            matchedPlanet: [],
            planetData: ""

        };
        this.handleLogout = this.handleLogout.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);

    }
    componentDidMount() {
        fetchPlanetsService()
            .then(res => {

                this.props.loadPlanetData(res)
            })
            .catch(err => {
                console.log(err);

            });
    }
    handlePlanetPress(ev, data) {
         

        fetchPlanetDataService(data.url)
            .then(res => {

                this.setState({ "planetData": res })
            })
            .catch(err => {
                console.log(err);

            });

    }
    handleKeyPress(ev) {
         
        ev.preventDefault();
        const { planetData } = this.props

         
            if (planetData) {
                let tempArray = planetData.filter(data => data.name.indexOf(ev.target.value) > -1)
                if (tempArray) {
                    this.setState({ matchedPlanet: tempArray })
                }
    
            }
         
       
    }

    handleLogout() {

        this.props.logOut();
        this.props.history.push('/')
    }

    getClassName(data) {
         
        let data1 = {}
        if (data) {
            let fontSize = data.substr(0, 2);
            data1 = { fontSize: parseInt(fontSize) + "px"}
        }




        return data1;

    }
    render() {
        let style;

        return (
            <div className="search-con">
                <div className="header-con">
                    <h1>Search</h1>
                    <button onClick={this.handleLogout}>Logout</button>
                </div>

                <input type="text" className="input-custom" onChange={this.handleKeyPress} placeholder="enter" />
                <div className="planet-con">
                    <ul className="planet-name">
                        {
                            this.state.matchedPlanet &&

                            this.state.matchedPlanet.map((data, index) => <li style={this.getClassName(data.population)} onClick={(ev) => this.handlePlanetPress(ev, data)} key={index}>{data.name}</li>)
                        }
                    </ul>
                </div>
                {/* for planet data */}
                

                {
                    this.state.planetData &&
                    <div className="planet-model">

<h3>Description of {this.state.planetData.name} </h3>
                      
                      <div className="con-desc">             
                        <div className="left-head">Name  :</div>
                        <div className="right-head">
                           {this.state.planetData.name}
                        </div>
                        </div>

                        <div className="con-desc">
                        <div className="left-head">rotation period :</div> 
                        <div className="right-head">
                           {this.state.planetData.rotation_period}
                        </div>
                        </div>

                            <div className="con-desc">
                        <div className="left-head">Climate  :</div>
                        <div className="right-head">
                           {this.state.planetData.climate}
                        </div>
                            </div>

                               <div className="con-desc">
                        <div className="left-head">Gravity  :</div>
                        <div className="right-head">
                           {this.state.planetData.gravity}
                        </div>
                            </div>

                            <div className="con-desc">
                        <div className="left-head">Terrain  :</div>
                        <div className="right-head">
                           {this.state.planetData.terrain}
                        </div>
                            </div>

                            <div className="con-desc">
                        <div className="left-head">Surface Water  :</div>
                        <div className="right-head">
                           {this.state.planetData.surface_water}
                        </div>

                            </div>
                            <div className="con-desc">
                        <div className="left-head">Gravity  :</div>
                        <div className="right-head">
                           {this.state.planetData.gravity}
                        </div>
                            </div>

                               <div className="con-desc">
                        <div className="left-head">Population  :</div>
                        <div className="right-head">
                           {this.state.planetData.population}
                        </div>
                            </div>

                              <div className="con-desc">
                        <div className="left-head">Redidents  :</div>
                        <div className="right-head">
                           {
                               Array.isArray(this.state.planetData.residents) && (this.state.planetData.residents.length>0)? 
                                this.state.planetData.residents.map((res,index) => {
                                return <div className="links" key={index}><a href={res}>{res} </a> ,</div>})
                               : 'No residents Exist' }
                        </div>
                            </div>

               <div className="con-desc">
                        <div className="left-head">Films  :</div>
                        <div className="right-head">

                           {
                               Array.isArray(this.state.planetData.films) && (this.state.planetData.films.length>0) ? 
                                this.state.planetData.films.map((res,index) => {
                                return <div className="links" key={index}><a href={res}>{res} </a> ,</div>})
                               : 'No Films Exist' }
                        </div>
                            </div>

                             <div className="con-desc">
                        <div className="left-head">Created  :</div>
                        <div className="right-head">

                           {this.state.planetData.created }
                        </div>
                            </div>


      <div className="con-desc">
                        <div className="left-head">Edited  :</div>
                        <div className="right-head">

                           {this.state.planetData.edited }
                        </div>
                            </div>
                            
                            <div className="con-desc">
                        <div className="left-head">Url  :</div>
                        <div className="right-head">

                           <a href={this.state.planetData.url}>{this.state.planetData.url}</a> 
                        </div>
                            </div>
                            

                    </div>

                }


            </div>
        );
    }
};

const mapStateToProps = (state) => {
    return {

        planetData: state.app.planetData.results,
        userData:state.app.userDetails.username
        
    }
}
const mapDispatchToProps = (dispatch) => {
    return {


        logOut: () => dispatch({ type: "LOGOUT_SUCCESS" }),
        loadPlanetData: (payload) => dispatch({ type: "LOAD_PLANET_DATA", payload }),


    }

}
export default connect(
    mapStateToProps,
    mapDispatchToProps

)(Search);
