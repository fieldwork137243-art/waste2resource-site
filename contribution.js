const submissionForm=document.querySelector('#case-submission-form');
const submissionStatus=document.querySelector('#submission-status');

if(submissionForm){
  submissionForm.addEventListener('submit',event=>{
    event.preventDefault();
    if(!submissionForm.reportValidity())return;
    const data=new FormData(submissionForm);
    const subject=`Case-study suggestion: ${data.get('caseName')}`;
    const body=[
      'WASTE2RESOURCE — STRUCTURED CASE SUBMISSION',
      '',
      `Submitted by: ${data.get('name')}`,
      `Contact email: ${data.get('email')}`,
      `Case / project: ${data.get('caseName')}`,
      `Country / location: ${data.get('location')}`,
      `Commodity / waste stream: ${data.get('material')}`,
      `Reuse pathway: ${data.get('pathway')}`,
      `Evidence maturity: ${data.get('maturity')}`,
      `Primary source: ${data.get('source')}`,
      '',
      'WHAT THE EVIDENCE SUPPORTS',
      data.get('evidence'),
      '',
      'KNOWN LIMITATIONS OR UNCERTAINTIES',
      data.get('limitations')||'Not provided',
      '',
      'Consent confirmed: Yes'
    ].join('\n');
    submissionStatus.textContent='Opening your email app. Please review the message and press Send.';
    window.location.href=`mailto:hello@waste2resource.com.au?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
