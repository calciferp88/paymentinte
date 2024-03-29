import React, { useState, useEffect } from 'react';
import { Users } from "../data/user.js";

function Suggestion() {

    const [ suggestion, setSuggesstion ] = useState([]);

    useEffect( () => {
        setSuggesstion(Users);
    }, []);

    return (
        <div className="mt-4 ml-10">
            <div className="flex justify-between text-sm mb-5">
                <h3 className="text-sm font-bold text-gray-400">Suggesstions for you</h3>
                <button className="text-gray-600 font-semibold">See All</button>
            </div>
            {
                suggestion.slice(0,5).map(profile => (
                <div key={profile.id} className="flex items-center justify-between"> 

                    <img src={profile.image} className="
                    w-10 h-10 rounded-full border p-[2px]" />

                    <div className="flex-1 ml-4">
                        <h2 className="font-semibold text-sm">{profile.user}</h2>
                        <h3></h3>
                    </div>

                    <button className="text-blue-400 text-xs">Follow</button>

                   </div>
                ))}
        </div>
        
    )
}

export default Suggestion
