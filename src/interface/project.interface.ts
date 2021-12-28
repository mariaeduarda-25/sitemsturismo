import {ReactNode}  from "react";

export interface IProject{
    children: ReactNode
}

export interface IProjectData{
    id: number
    locais: string 
    user: {
        email: string 
    }
}