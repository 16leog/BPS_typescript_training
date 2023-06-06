let myName: string = 'Leo' // typescript infers 
let meaningOfLife: number;
let isLoading: boolean;
let album: string | number;

myName = 'John'
meaningOfLife = 42
isLoading = true
album = 5150

// infers return type
const sum = (a: number, b: string) => {
    return a+b
}

let postId: string | number
let isActive: number | boolean

let re: RegExp = /\w+/g