import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import {GetsurveybyEmail, GetuserbyID } from '../api/api';
import UserContext from './usercontext';

function Home() {
    let history = useHistory();

    let [userData,setuserData]=useState([]);
    let user=useContext(UserContext);
    console.log(user.userList[0]._id)
    useEffect(async () => {
        //getting the details of user by their id
        let users = await GetuserbyID(user.userList[0]._id);
        let userEmail=users.data.email;
        //getting the data of survey by user email
        let surveybyid=await GetsurveybyEmail(userEmail)
        setuserData(surveybyid.data)
    }, [])

    return (
        <>
            <button className="float-end btn btn-warning mt-2" onClick={() => {
                history.push(`/survey/${user.userList[0]._id}`)
            }}>Add Survey</button>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">name</th>
                        <th scope="col">email</th>
                        <th scope="col">phone</th>
                        <th scope="col">gender</th>
                        <th scope="col">DoB</th>
                        <th scope="col">Place</th>
                    </tr>
                </thead>
                {/* displaying all the survey of user email */}
                <tbody>
                {
                        userData.map((use, index) => {
                            return (
                                <tr>
                                    <th scope="row">{use.name}</th>
                                    <td>{use.email}</td>
                                    <td>{use.phone}</td>
                                    <td>{use.gender}</td>
                                    <td>{use.dob}</td>
                                    <td>{use.place}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </>
    );
}

export default Home;