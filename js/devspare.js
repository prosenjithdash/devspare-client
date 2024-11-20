// console.log('Devspare Client Side with JS.')

const loadData = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json();
    console.log(data)
}
loadData(data.data);