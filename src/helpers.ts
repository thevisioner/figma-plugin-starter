type RectangleProps = { x: number; color: RGB };

export function createRectangle({ x, color }: RectangleProps): RectangleNode {
  const rect = figma.createRectangle();
  rect.x = x;
  rect.fills = [{ type: "SOLID", color }];
  return rect;
}

type ShapeProps = {
  type?:
    | "SQUARE"
    | "ELLIPSE"
    | "ROUNDED_RECTANGLE"
    | "DIAMOND"
    | "TRIANGLE_UP"
    | "TRIANGLE_DOWN"
    | "PARALLELOGRAM_RIGHT"
    | "PARALLELOGRAM_LEFT";
  x: number | ((shape: ShapeWithTextNode) => number);
  color: RGB;
};

export function createShapeWithText({
  type = "ROUNDED_RECTANGLE",
  x,
  color,
}: ShapeProps): ShapeWithTextNode {
  const shape = figma.createShapeWithText();
  shape.shapeType = type;
  shape.x = typeof x === "function" ? x(shape) : x;
  shape.fills = [{ type: "SOLID", color: color }];
  return shape;
}
