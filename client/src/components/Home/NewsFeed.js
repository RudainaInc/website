import React from 'react'

const NewsFeed = ({
    textRange,
    img
}) => {

    return(
        <div>
            <table width="100%" border="1" >
                <tbody>
                    <tr>
                        <td width="30%">
                            <body onLoad="slide('image1',arr);changeText();"/>
                            <div id="img" >
                                <img id="image1" height="400px" width="600px" align="middle" border="5" style={{"border-color":"white;"}} src={img} />
                            </div>
                        </td>

                        <td>
                            <div id={textRange}/>
                            <br/>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default NewsFeed;