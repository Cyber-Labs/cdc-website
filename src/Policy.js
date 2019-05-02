import React from 'react';
import ReactDOM from 'react-dom';
import './policies1.css';

import Header from './Header';
import Footer from './footer';

class Policy extends React.Component{
	render(){
		return(<div>
      <Header />
			 {/* <div className="p2">
         <div className="paramargin">
			  Guidelines by All IIT Placement Committee(AIPC) to the recruiters..<br/>
			  In order to have a mutual benefit and to have a long term association, the AIPC has indicated the following guidelines to the recruiters. All the recruiters are requested to kindly stick to these positively to have a smooth placement process.
			 </div>
     </div> */}
			 <div className="p3">
        <div className="paramargin">
			  <div className="headingpolicy">Pre-Placement:</div>
			  <ol>
			    <li>PPOs: In order to have a mutual benefit, it is highly desirable that the status of the PPOs be informed by the last week of August. This is for students selected for intern through on campus internship hiring process by the recruiters and after successful completion of the internship.</li>
			    <li>Short listing as well as selection criteria: If a company has any reservation to shortlist / accepts students with arrears/backlogs, the company needs to inform the same in advance in the job notification form. The company should clearly spell these criterions in the job notification form such as: active/ cleared backlogs, year gap, bond, medical fitness parameters etc.</li>
			    <li>Requirement on bond: If the policy of a company requires signing a bond as part of the joining, it is highly desirable to specify clearly at the time of registration (on the registration portal in the JNF).</li>
			    <li>Representation during the Pre-assessment tests: At least one representative from the company and/ or on behalf of the company should be present in the campus during pre-assessment tests.</li>
			    <li>Medical tests and Visa: Regarding medical tests and visa delay issues, it will be beneficial that the recruiter informs students in advance through Placement/CDC/CCD office.</li>
			    <li>Time duration: The maximum time for any pre-assessment test (online or off-line) is 90 minutes. Under certain exceptional cases another 30 minutes may be considered. For a single company, a student can appear for personal interview for a maximum of two hours which must include multiple sessions along with break in between and no single session can go beyond 45 minutes.</li>
			    <li>The placement test should be held on campus under the supervision of respective placement office. Generic tests like hackathon, code challenge, case competition, buddy session etc. will not be recognized as placement process and a company cannot recruit through these means as a part of official campus placement. </li>
              </ol>
              </div>
             </div>
             <div className="p4">
             <div className="paramargin">
              <div className="headingpolicy">Post-Placement:</div>
              <section className="padding_shift">
              <div>Key information on the offers made: If a company makes offers during the placement session, the following key information may be provided along with the offer letter</div>
              <div>
              <ul>
                <li>The details on the salary structure (including take-home salary) based on the CTC </li>
                <li>Joining location</li>
                <li>Date of joining</li>
              </ul>
              </div>
              <div>The offer letters should preferably be provided within two months from the date of final interview. All the offers must be sent to the concerned Placement office.</div>
              <div>All communications related to recruitment process shall be routed through the concerned placement office.</div>
            </section>
             </div>
             </div>
             <div className="p5">
             <div className="paramargin">
              <div className="headingpolicy">Placement / Internship Policy</div>
              <div className="headingpolicy">For Company:</div>
              <ol>
               <li> CDC strictly follows the policy of single candidate single job/internship irrespective of company status (private / PSU / Government / Education sector etc.) or the CTC offered.</li>
               <li>The company must complete their selection process in a single day.</li>
               <li>The slot allotted by the placement office to the company is of 8 hours only. However, the companies shall be allowed to conduct test on the previous/same day to facilitated shortlisting of the candidates. The Start Time, End Time and duration of slot will be decided by CDC depending upon the number of companies pooled in.</li>
               <li>Interview process for any candidate must be completed by 8.00 PM on the same day and the result be confidently shared with CDC only (not to students) latest by 9.00 PM on the same day. CDC will subsequently declare the results to the students.</li>
               <li>No companies are allowed to interview a candidate for more than 45 minutes including Group Discussion and all rounds of interview (Technical + HR). A maximum of 30 minutes will be provided to a company for all rounds of interview (Technical + HR) if their selection process does not have Group Discussion.</li>
               <li> There is a high probability of multiple offers, to the students The companies have to provide the waiting list at the end of the selection process so that when a candidate is selected in more than one company, the wait listed candidate can be pushed up for selection. The wait list will not be disclosed to the students and will be released on per students basis.</li>
               <li>The companies are required to be in constant touch with the SCPT and CDC Officials. They should not entertain any direct contact from the students appearing in the placement process. In case of such a situation, the company must bring this immediately to the notice of the placement office.</li>
               <li>PSUs & Government organizations will be invited to conduct campus placement process any time during academic session. However, placement policy for PSUs & Government organizations are same as that of others.</li>
              </ol>
              <div className="headingpolicy">For Students:</div>
              <ol>
               <li>Student’s eligibility for a hiring process will be decided as per company eligibility criteria.</li>
               <li>Career Development Centre (CDC) follows the policy of One-Student-One-Job1 for all the CDC assisted offers, irrespective of the company status (PSU/Private/Government/Education Sector etc.) and/or CTC offered. The policy is applicable separately for both internship2 hiring and full time hiring. </li>
               <li>(a) A student will have to give his/her preference before start of a hiring process3 if he/she is appearing for hiring process of more than one company on a given day.<br />(b) The first choice of the student will be final if the student is selected by multiple companies. </li>
               <li>Any student who denies a full time offer after selection will be debarred from all the subsequent hiring process. </li>
               <li>Any student who denies an Internship offer after selection will be debarred from all the subsequent intern hiring process. </li>
               <li>Any final year student who has accepted Pre Placement Offer4 (PPO) during/after internship cannot appear in any subsequent placement process conducted through CDC. </li>
               <li>Any student who has accepted an internship offer through Online Contests facilitated/assisted by IIT(ISM) will be considered as on-campus internship offer and point 2 shall come into force. </li>
               <li>Any final year student who has accepted a PPO by company through Online Contests facilitated/assisted by IIT(ISM) will not be allowed to appear in any placement process conducted through CDC in his/her final year. </li>
               <li>A pre-final year student (of all programs) who has accepted a PPO by company through campus hiring or Online Contests facilitated/assisted by IIT(ISM) can appear for intern hiring process only in the pre-final year. However, the student cannot appear for PPO process of the company in which he/she is doing/undergoing the internship. (This is the case of B. Tech/ Integrated student who does internship after his/her second year and subsequently gets a PPO) </li>
               <li>Any pre-final year student who has accepted Returning Internship5 offer cannot appear for the intern hiring process of any other company. (This is also the case of B. Tech/ Integrated student who does internship after his/her second year and subsequently gets a returning internship offer) </li>
               <li>If a candidate registers for a particular company, he/she has to appear for the hiring process of the company. In case he/she decides not to appear for the hiring process of the company, he/she should intimate CDC in writing at least five (5) days before the scheduled test/GD/interview. Otherwise the candidate shall be debarred from the hiring process for next three (3) consecutive companies in which the student is otherwise eligible to appear. </li>
               <li>Any student getting pre-placement interview (PPI) 6 offer from a company can appear in the hiring process of other companies visiting campus before that company. If the student gets placement offer from any company in which he /she is appearing, the student will have to accept the offer and will not be allowed to avail the PPI offer. </li>
               <li>The students are instructed not to make any direct contact with company executives during placement session. In case of defiance, the candidate will be debarred from the hiring process for next three (3) consecutive companies in which the student is otherwise eligible to appear.</li>
               <li>If a student displays inappropriate behavior/communication (verbal/written/digital) during placement process, he/she may be debarred from the placement process of that particular company. The student will also be subjected to institute’s disciplinary rules. </li>
               <li>Punctuality is the hall mark of any decent activity/ process. Any student reporting beyond 10 minutes of the scheduled reporting time of any company process may be debarred from the placement process of that particular company. Conditions stated in point 11 may also apply. The student will also be subjected to institute’s disciplinary rules. </li>
               <li>Any act of cheating/violating the instructions given by CDC/company personnel/coordinators during a hiring process will disqualify the student from participating in the company hiring process. The student will also be subjected to institute’s disciplinary rules. </li>
               <li>If the activities mentioned in points (14), (15) & (16) are repeated by a student, he/she will be debarred from the entire placement process. </li>
               <li>Unauthorized entry of students (other than the SCPT members and the CDC approved coordinators) to CDC premises during an ongoing hiring process will be considered as an act of indiscipline and may invite an appropriate disciplinary action. </li>
               <li>Any final year student of dual degree/ integrated courses (M. Tech and MSc Tech), having been selected by a company for full time hiring through CDC, cannot further apply for 6 month internship. (This rule is applicable to the current batch graduating in 2019, only) </li>
               <li>A final year student of Dual Degree/ Integrated courses / M. Tech., having been selected for internship, is allowed to appear for full time hiring of other companies. However, if the student gets full time offer through CDC, he/she cannot appear for the PPO process of the company in which he/she is doing the internship. (This rule is applicable to the current batch graduating in 2019, only) </li>
              </ol>
             </div>
             </div>
             <Footer />
            </div>
            
              



		);
	}
}

export default Policy;