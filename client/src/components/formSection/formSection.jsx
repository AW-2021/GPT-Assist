import "./formSection.css";
import { useState } from 'react';

export default function FormSection({ generateResponse }) {

    const [newQuestion, setNewQuestion] = useState('');

    return (
        <div className="form-section">
            <button type="submit" className="btn btn-primary" onClick={() => generateResponse(newQuestion, setNewQuestion)}>
                Regenerate Now🤖</button>
            <textarea
                rows="2"
                className="form-control"
                placeholder="E.G: 'I want to start a car washing business that would make me rich'"
                value={newQuestion}
                onChange={e => setNewQuestion(e.target.value)}
            />
        </div>
    )
}
