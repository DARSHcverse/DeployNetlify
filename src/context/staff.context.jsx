import React, {createContext, useState, useEffect} from "react";
import { addCollectionAndDocument,fetchStaffAndDoc } from "../utils/firebase";

export const StaffContext=createContext({
    staff:{},  
})

export const StaffProvider=({children}) =>{
    const [staff,setStaff]= useState({})
    useEffect(()=>{
        const fetchStaffMap=async()=>{
            const staffMap=await fetchStaffAndDoc()
            setStaff(staffMap)
        }
        fetchStaffMap()
    },[])
    // useEffect(()=>{
    //     addCollectionAndDocument('staff',staffList)
    // }, [])
    const value={staff}
    return<StaffContext.Provider value={value}>{children}</StaffContext.Provider>
}