import { Link } from "remix";

export default function Methodology() {
  return (
    <div>
      <div>How you do anything is how you do everything.</div>
      <div>&nbsp;</div>
      <div>Application Hunting</div>
      <div>CTFs</div>
      <div>
        <Link to="day-week-month-cycle">Day / Week / Month cycle</Link>
      </div>
      <div>Personal Operation</div>
      <div>Travel Security</div>
      <div>CI/CD Hunting</div>
      <div>Team Fortification</div>
    </div>
  );
}
