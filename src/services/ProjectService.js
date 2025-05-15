import axios from "axios";

    //Conexión con el back
export const baseUrl= 'http://localhost:8080/api/projects'; //Estoy consumiendo esta API

    //Definir los métodos del back (en esencia, para mi página web, necesito sólo estos métodos, más el de la paginación)
        //Devolver todos los productos
export const findAllProjects = async () => {
    try{
        const response = await axios.get(baseUrl);
        return response.data;
    } catch (e) {
        console.error("Error fetching the projects: ", e);
        throw e;
    }
}
        //Devolver tres miniaturas aleatorias
export const findRandomMiniatures = async () => {
    try{
        const response = await axios.get(`${baseUrl}/miniatures`);
        return response.data;
    } catch (e) {
        console.error("Error fetching the miniature projects: ", e);
        throw e;
    }
}
        //Devolver todas las miniaturas paginadas
    export const findPaginatedMiniatures = async (page = 0, size = 3) => {
        try{
            const response = await axios.get(`${baseUrl}/paginated?page=${page}&size=${size}`);
            return response.data;
        } catch (e) {
            console.error("Error fetching the miniature paginated projects: ", e);
            throw e;
        }
    }
        //Devolver un projecto
export const findSingleProject = async (id) => {
    try{
        const project = await axios.get(`${baseUrl}/${id}`);
        console.log("Respuesta completa de axios:", project);
        return project.data;
    } catch (e) {
        console.error(`Error fetching the project under ID ${id}:`, e);
        throw e;
    }
}
