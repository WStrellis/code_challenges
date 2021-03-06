let comments = [
  {
    comment: "Test comment",
issue_description: "Test",
issue_status: "in-progress",
issue_title: "Test",
  },
  {
    comment: "Will send computers soon",
issue_description: "Roof leak caused water damage to computer, need new one for classroom.",
issue_status: "completed",
issue_title: "Broken Computer",
  },
  {
    comment: "Will resolve this issue soon",
issue_description: "Test",
issue_status: "in-progress",
issue_title: "Test",
  }
]

let issues = [
  {
    comment_id: null,
date: "2019-09-22",
id: 1,
issue_description: "Roof leak caused water damage to computer, need new one for classroom.",
issue_title: "Broken Computer",
school_id: 1,
status: "completed",
  },
  {
  comment_id: 4,
date: "2019-09-23",
id: 2,
issue_description: "Test",
issue_title: "Test",
school_id: 1,
status: "in-progress"  ,
  },
  {
    comment_id: null,
date: "2019-09-27",
id: 6632,
issue_description: "200 pencils with erasers.",
issue_title: "Need Pencils",
school_id: 1,
status: "Needs Attention",
  }
]

function addCommentsToIssues( issues, comments ){
  /* returns an array of issue objects.  */

      //loop over issues
    return issues.reduce( (updated, issue) => {
     let match = {};
    //loop over  comments
     comments.forEach( comment => {
       if((issue.issue_title == comment.issue_title) &&  (issue.issue_description == comment.issue_description)) { match['comment']=  comment.comment }}) 
      console.log('match', match)
      /* if  issue.issue_title === comment.issueTitle &&  issue.issue_des === comment.issue_des 
        insert comment into issue. 
        else, return issue.
      */
     return match ? [ ...updated, {...issue, ...match}]: [...updated, issue ];
    }, [])
 }

// module.exports = addCommentsToIssues;
console.log(addCommentsToIssues( issues, comments))
