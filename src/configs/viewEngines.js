import express from "express";

const conFigViewEngines = (app) => {
    app.set("view engine","ejs");
    app.set("views","./src/views")
}
    
export default conFigViewEngines;