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

    const circleArea = calculateShapeArea({ shape: "circle", radius: 5 });
    const rectangleArea = calculateShapeArea({
        shape: "rectangle",
        width: 4,
        height: 6,
    });
    console.log(circleArea)
    console.log(rectangleArea)

}