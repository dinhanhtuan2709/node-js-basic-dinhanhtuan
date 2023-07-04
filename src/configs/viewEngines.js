import express from "express";

const conFigViewEngines = (app) => {
    app.set("view engine","ejs");
    app.set("views","./src/views")
    app.use(express.static('./src/public'))
}
    
export default conFigViewEngines;