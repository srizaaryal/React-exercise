const App = () => (
    <div>
        <Tweet username = "Jasmine123" name = "Jasmine" date ='June' message = 'Hello!'/> 
        <Tweet username = "Sun123" name = "Sunny" date ={2023} message = 'My Name is Sun!'/> 
        <Tweet username = "Moon0" name = "Moon" date ="6/21/2023" message = 'I am Moon'/> 
        <Tweet username = "Star00" name = "Star" date ='July' message = 'I twinkle' /> 
    </div>
)

ReactDOM.render(<App />, document.getElementById('root'));