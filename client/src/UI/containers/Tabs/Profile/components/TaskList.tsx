import * as React from 'react';

const TaskList = () => {
    return(
        <div className="">
            <div className="section-header">
                <span className="text" >Task List</span>
            </div>
            <p className="center">This is a list of task we would need your help with . Please check below and select a task you think you could help with , 
                we really appreciate !
            </p>

            <table className="table table-striped">
                <thead>
                    <tr>
                        <th style={{width:"10%"}} scope="col">#</th>
                        <th style={{width:"30%"}} scope="col">Task</th>
                        <th style={{width:"40%"}} scope="col">Date</th>
                        <th style={{width:"10%"}} scope="col">Volunteers Needed</th>
                        <th style={{width:"10%"}} scope="col">Commitment(hrs)</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Bake cake</td>
                        <td>2018-03-28</td>
                        <td>15</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Bake cake</td>
                        <td>2018-03-28</td>
                        <td>15</td>
                        <td>3</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Bake cake</td>
                        <td>2018-03-28</td>
                        <td>15</td>
                        <td>3</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TaskList;