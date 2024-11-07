# APIs

## Sessions

**POST** `api/bookings/make_booking` with auth token

```

Requests

 {

		"studentID":token,

		"SessionsID":token,

	}

Response

	{

		"status":"OK","FULL","ERROR"

	}

```

adding to db handled in serverside

**PUT** `api/bookings/update` with auth token and session_id

auth_token==teacher

session_id == session_id



details to be changed in the session


implmenting notificaiton to the students

**DELETE** `api/bookings/cancel` with auth token

auth_token==student

sessino_id == session_id

deletes

auth_token==teacher

session_id == session_id

same removes the session for the teacher too and from its students list too

## Users

| Endpoint | Method | Role | Description |
| --- | --- | --- | --- |
| /api/users/profile | GET | Authenticated User | Return the authenticated user's profile. |
| /api/users/profile/{id} | GET | Any | Return the specific user's profile by ID. |
| /api/users/teachers | GET | Any | Retrieve a list of teachers for site viewing purposes. |
| /api/users/register | POST | Any | Register a new user (teacher or student) and return an access token and refresh token. |
| /api/users/login | POST | Any | Log in a user with username/password or email/password returns access token and refresh token|
| /api/users/refresh | POST | Any | Refresh the authentication token returns access token and refresh token |
| /api/users/profile | PUT | Authenticated User | Update the authenticated user's profile. |
| /api/users/profile | DELETE | Authenticated User | Delete the authenticated user's profile. |
