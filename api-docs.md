| Endpoint | Method | Role | Description |
| --- | --- | --- | --- |
| /api/users/{user_id} | GET | Any | Retrieve user data. Show full details if it’s the user’s own data. |
| /api/sessions/available?role=student | GET | Student | Retrieve available sessions for students to book. |
| /api/sessions/available?role=teacher | GET | Teacher | Retrieve sessions a teacher is hosting. |
| /api/teachers/{teacher_id}/sessions?public=true | GET | Any | Retrieve publicly available sessions for viewing teacher’s profile. |
| /api/teachers/{teacher_id}/sessions?private=true | GET | Teacher | Teachers retrieve all sessions they host, including drafts. |
| /api/sessions/upcoming?role=student | GET | Student | Get a list of upcoming sessions for the student. |
| /api/sessions/{session_id}/edit | PUT | Teacher | Teachers can edit sessions they own. |