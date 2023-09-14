export default function NavigationBar() {

    return (
        <div class="row">

            <div class="navigationBarSection col-sm-4">
                <ul class="nav flex-column">
                    <li class="nav-item" id="id_technical_skills">
                        <a class="nav-link active" href="#technicalSkills">Technical Skills</a>
                    </li>
                    <li class="nav-item" id="id_process_knowledge">
                        <a class="nav-link" href="#technicalSkills">Process knowledge</a>
                    </li>
                    <li class="nav-item" id="id_behavioral_skills">
                        <a class="nav-link" href="#technicalSkills">Behavioral Skills</a>
                    </li>
                    <li class="nav-item" id="id_my_achievements">
                        <a class="nav-link disabled" href="#myachievements">My achievements</a>
                    </li>
                    <li class="nav-item" id="id_my_feedbacks">
                        <a class="nav-link disabled" href="#myfeedbacks">My feedbacks</a>
                    </li>
                    <li class="nav-item" id="id_interesting_facts">
                        <a class="nav-link disabled" href="#interestingfacts">Interesting facts</a>
                    </li>
                    <li class="nav-item" id="id_external_links">
                        <a class="nav-link disabled"href="#connectwithme">How to connect?</a>
                    </li>

                </ul>
            </div>
            <div class="col-sm-3"/>
            <div class="col-sm-3"/>
            <div class="col-sm-3"/>
        </div>)
}