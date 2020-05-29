type TitleType = string;

type Classes = any;

type FirebaseData = {
  notes: ({
    title: string;
    body: string;
    id: string;
  })
}

type Data = {
  title: string;
  body: string;
  id: string;
}


// [
//   0 : {
//     title: "Hello World",
//     content: "string",
//     id: 3
//   },
//   1: {
//     title: "sample",
//     content: "this is sample",
//     id: 5
//   }
// ]