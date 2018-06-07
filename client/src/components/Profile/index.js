import React, { Component } from 'react';

class Profile extends Component {
    render() {
        return (
            <div className="container">
                <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                        <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/0/02/Temp_plate_blue.svg" alt="First slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/0/02/Temp_plate_blue.svg" alt="Second slide"/>
                        </div>
                        <div class="carousel-item">
                        <img class="d-block w-100" src="https://upload.wikimedia.org/wikipedia/commons/0/02/Temp_plate_blue.svg" alt="Third slide"/>
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div>
            </div>
        );
    }
}

export default Profile;