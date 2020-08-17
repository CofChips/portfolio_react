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
    },
    sendEmail: function(emailInfo) {
        return axios.post("/api/email", emailInfo);
      },
    getPortfolio: function(){
        return axios.get("/api/portfolio")
    }
}