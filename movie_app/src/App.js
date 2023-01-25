import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Movie from './Movie';

function App() {
    const [docs, setDocs] = useState([]); // 4번)

    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('https://jsonplaceholder.typicode.com/posts'); // (이 주소에 100개의 데이터가 들어있을때)
            console.log(result); // .json 하기전의 result 묶음 상태이다 (이렇게 사용 X)

            console.log(result.data); // 이런식으로 사용해야만, fetch API에서 toJson과 같은 결과를 낼 수 있다. // 결과가 100개의 데이터들

            // setDocs(result.data); // 이것 대신
            return result.data; // 1번) async가 return하는 값은 promise 이기때문에
        }

        // fetchData(); // 이것 대신
        // 함수 호출 + .then사용해서 값 풀어주기
        fetchData().then((data) => {
            // 2번) .then으로, 값을 풀어줘서 사용해야한다!
            setDocs(data);
        });
    }, []);

    return (
        <>
            <h1>
                {docs.map((data) => {
                    <Movie id={data.id} title={data.title}></Movie>;
                })}
            </h1>
        </>
    );
}

export default App;
