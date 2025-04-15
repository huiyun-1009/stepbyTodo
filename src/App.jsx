import "./App.css";
import Header from "./components/Header";
import Editor from "./components/Editor";
import List from "./components/List";
import { useState, useRef } from "react";

const mokdata = [
    {
        id: 0,
        isDone: false,
        content: "빨래하기",
        date: new Date().getTime(),
    },
    {
        id: 1,
        isDone: false,
        content: "공부하기",
        date: new Date().getTime(),
    },
    {
        id: 2,
        isDone: false,
        content: "산책하기",
        date: new Date().getTime(),
    },
];

function App() {
    const [todos, setTodo] = useState(mokdata);
    const idRef = useRef(3);

    const onCreate = (content) => {
        const newTodo = {
            id: idRef.current++,
            isDone: false,
            content: content,
            date: new Date().getTime(),
        };

        setTodo([newTodo, ...todos]);
    };
    return (
        <div className="App">
            <Header />
            <Editor onCreate={onCreate} />
            <List />
        </div>
    );
}

export default App;
