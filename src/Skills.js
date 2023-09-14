export default function Skills(skillDetail) {
    if (skillDetail.skillType === "technical") {
        return (<div class="row skillsWrapper" id="technicalSkills">
            <div class="col-sm-4 skillsWrapperItem">
                <h3>Technical skills</h3>
                <div class="col-sm-4">
                    <div className="skillItems">HTML</div>
                    <div className="skillItems">CSS</div>
                    <div class="skillItems">React JS</div>
                    <div class="skillItems">AngularJS</div>
                    <div class="skillItems">Javascript</div>
                    <div className="skillItems">JQuery</div>
                    <div className="skillItems">Ajax</div>
                    <div className="skillItems">NodeJS</div>
                    <div className="skillItems">C#.NET</div>
                    <div className="skillItems">ASP.NET Web API</div>
                    <div className="skillItems">SQL Server</div>
                    <div className="skillItems">PostgreSQL</div>
                    <div className="skillItems">REST API</div>
                </div>
                <div class="col-sm-4">
                    <div className="skillItems">OOPS</div>
                    <div className="skillItems">JSON</div>
                    <div className="skillItems">SOAP</div>
                    <div className="skillItems">Microservices</div>
                    <div className="skillItems">Design Patterns</div>
                    <div className="skillItems">Splunk</div>
                    <div className="skillItems">Slack</div>
                    <div className="skillItems">AppDynamics</div>
                    <div className="skillItems">New Relic</div>
                    <div className="skillItems">Bamboo</div>
                    <div className="skillItems">Azure DevOps</div>
                    <div className="skillItems">AWS</div>
                    <div className="skillItems">Stash</div>
                </div>
                <div class="col-sm-4">
                    <div className="skillItems">GitHub</div>
                    <div className="skillItems">Bitbucket</div>
                    <div className="skillItems">Confluence</div>
                    <div className="skillItems">Atlassian Tools</div>
                    <div className="skillItems">Redis</div>
                    <div className="skillItems">SignalR</div>
                    <div className="skillItems">nginx</div>
                    <div className="skillItems">TDD and BDD</div>
                    <div className="skillItems">Selenium</div>
                    <div className="skillItems">RabbitMQ</div>
                    <div className="skillItems">MSMQ</div>
                    <div className="skillItems">Selenium</div>
                </div>
            </div>
            <div class="col-sm-3 skillsWrapperItem">
                <h3>Process skills</h3>
                <div class="skillItems">Agile</div>
                <div class="skillItems">Scaled Agile</div>
                <div class="skillItems">Kanban</div>
                <div class="skillItems">DevOps</div>
                <div class="skillItems">CI/CD</div>
                <div class="skillItems">Kaizen</div>
                <div class="skillItems">Scrums</div>
                <div class="skillItems">Extreme Programming</div>
                <div class="skillItems">Root Cause Analysis</div>
                <div class="skillItems">SDLC</div>
                <div class="skillItems">STLC</div>
            </div>
            <div class="col-sm-3 skillsWrapperItem">
                <h3>Behavioral skills</h3>
                <div class="skillItems">Customer Obsessed</div>
                <div class="skillItems">Result Driven</div>
                <div class="skillItems">Self Starter</div>
                <div class="skillItems">Creative & Innovative</div>
                <div class="skillItems">Highly Collaborative</div>
                <div class="skillItems">Excellent Communication Skills</div>
                <div class="skillItems">Decision Maker</div>
                <div class="skillItems">Entrepreneurial</div>
                <div class="skillItems">Team Player</div>
                <div class="skillItems">Inspirational</div>
                <div class="skillItems">Optimistic</div>
            </div>
        </div>)
    }
    else
        return (<div class="row"></div>);
}