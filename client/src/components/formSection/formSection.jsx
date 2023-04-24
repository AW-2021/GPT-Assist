import "./formSection.css";

export default function FormSection() {
    return (
        <div className="form-section">
            <button type="button" class="btn btn-primary">Regenerate Now🤖</button>
            <textarea
                rows="2"
                className="form-control"
                placeholder="E.G 'I want to start a car washing business that would make me rich'"
            ></textarea>
        </div>
    )
}
