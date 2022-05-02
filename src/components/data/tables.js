
import React, {useEffect, useState,Component} from "react";
const API_HOST="http://localhost:3000";
const INVENTORY_API_URL = `${API_HOST}/inventory`;

export const MyTable = ()=>{
    return(
        <div className="myTable">
            <table>
                <thead>
                <tr>
                    <th>Song name</th>
                    <th>Artist</th>
                    <th>Album</th>
                    <th>Duration</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                    <td/>
                </tr>
                </tbody>
            </table>
        </div>)

}
