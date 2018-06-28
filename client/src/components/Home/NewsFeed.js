import React from 'react'

const NewsFeed = ({
    textRange,
    img
}) => {

    return(
        <div className="news-feed">
            <table width="100%" border="1" >
                <tbody>
                    <tr>
                        <td width="30%">
                            <div id="img" >
                                <img id="image1" height="400px" width="600px" align="middle" border="5" style={{"border-color":"white;"}} src={img} alt="test"/>
                            </div>
                        </td>

                        <td>
                            <p>{textRange}</p>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default NewsFeed;