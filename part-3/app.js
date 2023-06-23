const App = () =>(
    <div>
        <Person name = "Maria" age = {16} hobbies = {['dancing','coding','travelling','swimming']}/>
        <Person name ="Ranganathan" age = {40} hobbies = {['watching movies', 'reading', 'gaming']}/>
        <Person name ="Moon" age = {18} hobbies = {['travelling', 'coding']} />
        <Person name ="Kimberlyne" age = {29} hobbies = {['reading', 'hiking','running']}/>
        <Person name ="Mark" age = {15} hobbies = {['playing music','soccer','football']}/>
        <Person name ="August" age = {17} hobbies = {['playing games','kayaking','singing']}/>
    </div>

)


ReactDOM.render(<App />, document.getElementById('root'));