import * as React from 'react';

const MyProfile = (props: any) => {
    const { user } = props;
    return(
        <div>
            <div className="section-header">
                <span className="text" >My Profile</span>
            </div>

            <div className="myImage alignCenter">
                <img src="../img/user.png" alt="Avatar"/>
            </div>

            <div>
                <h2 className="alignCenter">{user.fname + " " + user.lname}</h2>
            </div>

            { user.myStatus === false ? status : null }
            

            <form className="aboutMe">
                <p>
                    It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                    The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here,
                    content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum
                    as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions
                    have evolved 
                </p>
            </form>

        </div>
    )
}

export default MyProfile;