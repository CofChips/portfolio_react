import axios from "axios";

export default {
    getSkills1: function(){
        return axios.get("/api/skills1");
    },
    getSkills2: function(){
        return axios.get("/api/skills2");
    },
    getSkills3: function(){
        return axios.get("/api/skills3");
    }
}