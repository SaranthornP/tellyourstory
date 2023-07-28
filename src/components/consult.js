import { Component } from "react";

class ObjTag extends Component {
    render() {
        return (
            <h6 className="ObjTag mx-3 p-2 bg-white rounded-pill text-black border">{this.props.val}</h6>

        );
    }
}

function Consult() {
    return (
        <div className="container tes">
            <div className="row text-center">
                <div className="col-12">
                    <h1>The Home of your dream HEART</h1>
                </div>
                <div className="col-12">
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"></input>
                        <button class="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
                <div className="col-12">
                    <h5>Trending search</h5>
                </div>
                <div className="col-12 d-flex justify-content-center">
                    <ObjTag val="family" />
                    <ObjTag val="family" />
                </div>
            </div>
        </div>
    );
}

export default Consult;
