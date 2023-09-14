import './App.css'
export default function FixedBar(nameProp) {
    return (<div>
        <div class="row font-family-monospace">
            <div class="headerNameArea">
                {nameProp.name}<br/>
                <div class="fontSize-large-italic">Over 16 years of extensive experience in software Development. I have built and delivered end to end software solutions to our customers. </div>
            </div>
        </div>
    </div>);
}