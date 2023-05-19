export const abhishekRoute = (req,res) => {
    res.send("Hello World abhishek");
}

export const homeRoute = (req,res) => {
    res.send("Home Route");
}

export const example = (req,res) => {
    try{
        res.send("example function accessed");
    } catch(error){
        console.log(error);
    }
}


