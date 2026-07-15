// MyContext.tsx
import { createContext } from "react";

export interface MyContextType {
    text: string;
    setText: (value: string) => void;
}

// Create context with default values
export const MyContext = createContext<MyContextType>({
    text: "NO COLLAGE",
    setText: () => { }
});