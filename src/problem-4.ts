{
    type Shape =
        | {
            shape: "circle";
            radius: number
        }
        | {
            shape: "rectangle";
            width: number;
            height: number
        };
    function calculateShapeArea(shape: Shape): number {
        if (shape.shape === "circle") {
            return Number((Math.PI * shape.radius ** 2).toFixed(2))
        }
        else if (shape.shape === "rectangle") {
            return shape.height * shape.width
        }
        throw new Error("not matching shape name")
    }

    
   

}