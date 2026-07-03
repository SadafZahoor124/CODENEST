import React from "react";
import "./SubmissionDetails.css";
function SubmissionDetails() {
  return (
    <div className="submission-details">
      <h1>Submission Details</h1>

      <div className="submission-card">
        <p><strong>Problem:</strong> Two Sum</p>
        <p><strong>Status:</strong> Accepted</p>
        <p><strong>Language:</strong> Java</p>
        <p><strong>Runtime:</strong> 0.45s</p>
        <p><strong>Submitted At:</strong> 12 Mar 2026</p>
      </div>

      <div className="code-section">
        <h2>Submitted Code</h2>

        <pre>
{`class Solution {
    public int[] twoSum(int[] nums, int target) {

        for(int i=0; i<nums.length; i++) {
            for(int j=i+1; j<nums.length; j++) {

                if(nums[i] + nums[j] == target) {
                    return new int[]{i,j};
                }
            }
        }

        return new int[]{};
    }
}`}
        </pre>
      </div>
    </div>
  );
}

export default SubmissionDetails;