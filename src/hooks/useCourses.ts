import { QueryFunction, useQuery } from "@tanstack/react-query";

interface Course{
    id:number;
    title:string;
    description:string;
    duration:string;
}

const fetchCourses:QueryFunction<Course[]>  = async () =>{
    const response = await fetch("/api/courses.json");
    if (!response.ok){
        throw new Error("F");
    }
    return response.json();
}

export const useCourses = () =>{
    return useQuery<Course[],Error>({
        queryKey:["courses"],
        queryFn:fetchCourses
    })
}