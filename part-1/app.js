const App = () => (
    <div>
        <FirstComponent />
        <NamedComponents name = 'Sriza' place = 'New Jersey' />
    </div>
    )

ReactDOM.render(<App />, document.getElementById('root'));