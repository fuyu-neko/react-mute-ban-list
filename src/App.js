import { useState, useRef } from 'react';
import './App.css';
import LogList from './LogList';

function App() {
    const [logs, setLogs] = useState([]);

    const nameRef = useRef();
    const reasonRef = useRef();
    const logtypeRef = useRef();
    const dateRef = useRef();

    const handleAddLog = () => {
        //ログの追加
        const name = nameRef.current.value;
        const reason = reasonRef.current.value;
        const logtype = logtypeRef.current.value;
        const date = dateRef.current.value;

        if (name === "") return;
        const current_id = logs.length;
        setLogs((prevLogs) => {
            return [...prevLogs, { id: current_id, name: name, reason: reason, type: logtype, unban_date: date, lifted: "False"}];
        });
        nameRef.current.value = null;
        reasonRef.current.value = null;
        logtypeRef.current.value = null;
        dateRef.current.value = null;
    };


    const idRef = useRef();
    const toggleLog = () => {
        const id = idRef.current.value;
        const newLogs = [...logs];
        const log = newLogs.find((log) => log.id === Number(id));
        log.lifted = "True";
        setLogs(newLogs);
        idRef.current.value = null;
    };

    //ログの削除
    const idRef2 = useRef();
    const handleLogClear = () => {
        const id = idRef2.current.value;
        const newLogs = logs.filter((log) => log.id !== Number(id));
        setLogs(newLogs);
        idRef2.current.value = null;
    };


    return (
        <>  
            <label className="form-label">Add Players Log</label>
            <div className="input-group mb-3">
                <span className="input-group-text">Name:</span>
                <input type="text" className="form-control" ref={nameRef}/>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Reason</span>
                <input type="text" className="form-control" ref={reasonRef}/>
            </div>
            <div className="input-group mb-3">
                <label className="input-group-text">Log Type</label>
                <select className="form-select" ref={logtypeRef}>
                    <option defaultValue value="Mute">Mute</option>
                    <option value="Ban">Ban</option>
                    <option value="CR">CR</option>
                </select>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">Length</span>
                <input type="date" className="form-control" ref={dateRef}/>
            </div>
            <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                <button type="button" className="btn btn-success" onClick={handleAddLog}>Confirm</button>
            </div>
            <br></br>
            <br></br>
            <br></br>
            <div className="input-group mb-3">
                <span className="input-group-text">ID:</span>
                <input type="text" className="form-control" ref={idRef} />
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-warning" onClick={toggleLog}>Lift</button>
                </div>
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text">ID:</span>
                <input type="text" className="form-control" ref={idRef2} />
                <div className="btn-group" role="group" aria-label="Basic mixed styles example">
                    <button type="button" className="btn btn-danger" onClick={handleLogClear}>Delete</button>
                </div>
            </div>
            <br></br>
            <div>Log members:{logs.filter((log) => !log.lifted).length}</div>
            <LogList logs={logs} />
            
        </>
    );
};

export default App;
