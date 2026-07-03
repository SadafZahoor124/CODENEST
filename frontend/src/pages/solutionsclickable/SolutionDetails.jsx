import "./SolutionDetails.css";
import { useNavigate, useParams } from "react-router-dom";

function SolutionDetails() {
  const navigate = useNavigate();
  const { id } = useParams();

  return (
    <div className="solution-container">
      <h1 className="solution-title">Two Sum Solution</h1>

      <div className="solution-info">
        <span>Language: JavaScript</span>
        <span>Difficulty: Easy</span>
      </div>

      <div className="code-section">
        <h2>Solution Code</h2>

        <pre className="code-box">
{`function twoSum(nums, target) {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];

    if (map[diff] !== undefined) {
      return [map[diff], i];
    }

    map[nums[i]] = i;
  }
}`}
        </pre>
      </div>

      <div className="explanation">
        <h2>Explanation</h2>

        <p>
          This solution uses a Hash Map to store previously visited numbers.
          For each number, it checks whether the required complement already
          exists. This gives an efficient time complexity of O(n).
        </p>
      </div>

      <button className="back-btn" onClick={() => navigate("/solutions")}>
        Back to Solutions
      </button>
    </div>
  );
}

export default SolutionDetails;